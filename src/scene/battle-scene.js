import Scene from './scene';
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

        this.nextTurn();
    }

    /**
     * Get the turn order
     */
    getTurnOrder() {
        const units = [
            ...this.friendlyTeam,
            ...this.enemyTeam,
        ];
        const sortedUnits = dynamicSort(units, 'attributes.speed').reverse();

        return sortedUnits.map((unit) => unit.name);
    }

    /**
     * Go to the next turn
     */
    nextTurn() {
        [this.currentAttacker] = this.turnOrder;
    }
}

export default BattleScene;
