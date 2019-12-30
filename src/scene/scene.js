import Events from '../utils/event';

/**
 * @class Scene
 *
 * @mixes Events
 */
class Scene {
    /**
     * Construct the scene
     *
     * @param {object} params
     * @param {string} params.name - the name of the scene
     * @param {function(Object)} [params.onMount] - event handler for the mount event
     * @param {function(Object)} [params.onDismount] - event handler for the dismount event
     *
     * @constructor
     */
    constructor({
        name,
        onMount,
        onDismount,
    }) {
        this.name = name;
        this.isMounted = false;
        this.eventHandlers = {
            mount: onMount ? [onMount] : [],
            dismount: onDismount ? [onDismount] : [],
        };

        (async () => {
            await this.mount();
        })();
    }

    /**
     * Mount the scene
     */
    async mount() {
        setTimeout(() => {
            this.isMounted = true;
            this.emit('mount');
        }, 50);
    }

    /**
     * Dismount the scene
     */
    async dismount() {
        this.isMounted = false;
        this.emit('dismount');
    }

    /**
     * Dismount the scene and move on to the next scene
     */
    async nextScene(scene) {
        await this.dismount();

        return scene;
    }
}

/**
 * Assign the Events mixin
 */
Object.assign(Scene.prototype, Events);

export default Scene;
