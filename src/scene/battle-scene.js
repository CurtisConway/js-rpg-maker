import Scene from './scene';
import TextScene from "./text-scene";
import { dynamicSort } from '../utils/utils';

/**
 * BattleScene
 * @extends Scene
 */
class BattleScene extends Scene {
    /**
     * Construct the battle scene
     *
     * @param {object} params
     * @param {string} params.name - the name of the scene
     * @param {function(Object)} [params.onMount] - event handler for the mount event
     * @param {function(Object)} [params.onDismount] - event handler for the dismount event
     * @param {string} params.text - The text for the scene to display
     * @param {array<Unit>} params.friendlyTeam - The friendly team in the battle
     * @param {array<Unit>} params.enemyTeam - The enemy team in the battle
     * @param {Scene} params.victoryScene - The scene to move to upon victory
     * @param {Scene} params.deathScene - The scene to move to upon death
     *
     * @constructor
     */
    constructor({
        name,
        onMount,
        onDismount,
        text = '',
        friendlyTeam = [],
        enemyTeam = [],
        victoryScene,
        deathScene = new TextScene({
            name: 'Generic Death Screen',
            text: 'You Died',
        }),
    }) {
        super({
            name,
            onMount,
            onDismount,
        });

        this.text = text;
        this.friendlyTeam = friendlyTeam;
        this.enemyTeam = enemyTeam;
        this.turnOrder = this.getTurnOrder();
        this.currentAttacker = null;
        this.victoryScene = victoryScene;
        this.deathScene = deathScene;

        this.nextTurn();
        this.addUnitDeathEventListeners();
    }

    /**
     * Get the turn order
     */
    getTurnOrder() {
        const units = [
            ...this.friendlyTeam,
            ...this.enemyTeam,
        ].filter((unit) => unit.alive);
        const sortedUnits = dynamicSort(units, 'attributes.speed').reverse();

        return sortedUnits.map((unit) => unit.name);
    }

    /**
     * End the current turn
     */
    endTurn() {
        this.turnOrder.splice(0, 1);

        this.nextTurn();
    }

    /**
     * Go to the next turn
     */
    nextTurn() {
        [this.currentAttacker] = this.turnOrder;

        if (!this.currentAttacker && this.aliveFriendlies && this.aliveEnemies) {
            this.turnOrder = this.getTurnOrder();

            this.nextTurn();
        }
    }

    /**
     * Emit an attack event between two units
     *
     * @param {Unit} attacker
     * @param {Unit} defender
     * @param {number} damage
     */
    attack(attacker, defender, damage) {
        const damageAfterBonuses = BattleScene.calculateDamage(attacker, defender, damage);

        defender.damage(damageAfterBonuses);

        this.emit('attack', {
            attacker,
            defender,
            damageAfterBonuses,
        });
    }

    /**
     * Add event listeners for whenever a unit dies
     */
    addUnitDeathEventListeners() {
        const units = [
            ...this.friendlyTeam,
            ...this.enemyTeam,
        ];

        units.forEach((unit) => {
            unit.on('death', (event) => {
                this.turnOrder = this.getTurnOrder();
                [this.currentAttacker] = this.turnOrder;

                if (this.aliveFriendlies === 0) {
                    this.next(this.deathScene);
                }

                if (this.aliveEnemies === 0) {
                    this.next(this.victoryScene);
                }

                this.emit('death', event);
            });
        });
    }

    get aliveFriendlies() {
        return this.friendlyTeam.filter((unit) => unit.alive).length;
    }

    get aliveEnemies() {
        return this.enemyTeam.filter((unit) => unit.alive).length;
    }


    /**
     * Calculate the damage based on unit attributes
     *
     * Will increase damage by 1 for every 2 strength the attacker has
     * Will reduce the damage by 1 for every 100 armor the defender has
     *
     * @param {Unit} attacker
     * @param {Unit} defender
     * @param {number} damage
     */
    static calculateDamage(attacker, defender, damage) {
        const { strength } = attacker.attributes;
        const { armor } = defender.attributes;

        const damageBeforeArmor = damage + Math.floor(strength / 2);

        return damageBeforeArmor - Math.floor(armor / 100);
    }
}

export default BattleScene;
