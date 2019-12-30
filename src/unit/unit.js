import Events from '../utils/event';

/**
 * @class Unit
 *
 * @mixes Events
 */
class Unit {
    /**
     * Construct the Unit
     *
     * @param {object} params
     * @param {string} params.name - the name of the unit
     * @param {number} [params.totalHealth=1] - the total health of the unit
     * @param {number} [params.currentHealth] - the current health of the unit
     * @param {number} [params.speed=1] - the speed of the unit
     * @param {number} [params.strength=1] - the strength of the unit
     * @param {number} [params.armor=1] - the armor of the unit
     * @param {function(Object)} [params.onSpawn] - event handler for the spawn event
     * @param {function(Object)} [params.onDeath] - event handler for the death event
     *
     * @constructor
     */
    constructor({
        name,
        totalHealth = 1,
        currentHealth = 0,
        speed = 1,
        strength = 1,
        armor = 1,
        onSpawn,
        onDeath,
    }) {
        this.name = name;
        this.alive = currentHealth > 0;
        this.eventHandlers = {
            spawn: onSpawn ? [onSpawn] : [],
            death: onDeath ? [onDeath] : [],
        };

        this.spawn({
            name,
            totalHealth,
            currentHealth,
            armor,
            speed,
            strength,
        });
    }

    /**
     * Spawn the Unit
     *
     * @param {object} params
     * @param {number} params.totalHealth - the total health of the unit
     * @param {number} params.currentHealth - the current health of the unit
     * @param {number} params.speed - the speed of the unit
     * @param {number} params.strength - the strength of the unit
     * @param {number} params.armor - the armor of the unit
     */
    spawn({
        totalHealth,
        currentHealth,
        speed,
        strength,
        armor,
    }) {
        this.attributes = {
            totalHealth,
            armor,
            speed,
            strength,
        };

        if (currentHealth != null && currentHealth <= totalHealth) {
            this.attributes.currentHealth = Number(currentHealth);
        } else {
            this.attributes.currentHealth = Number(totalHealth);
        }

        this.emit('spawn');
    }

    /**
     * Damage the Unit
     *
     * @param {number} amount
     */
    damage(amount = 0) {
        this.attributes.currentHealth -= amount;

        if (this.attributes.currentHealth <= 0) {
            this.alive = false;
            this.emit('death');
        }
    }


    /**
     * Heal the Unit
     *
     * @param {number} amount
     */
    heal(amount = 0) {
        this.attributes.currentHealth += amount;

        if (this.attributes.currentHealth > this.attributes.totalHealth) {
            this.attributes.currentHealth = this.attributes.totalHealth;
        }
    }
}

/**
 * Assign the Events mixin
 */
Object.assign(Unit.prototype, Events);

export default Unit;
