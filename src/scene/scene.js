import Events from '../utils/event';

/**
 * @class Scene
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
    }

    /**
     * Mount the scene
     */
    mount() {
        this.isMounted = true;

        this.emit('mount');
    }

    /**
     * Dismount the scene
     */
    dismount() {
        this.isMounted = false;
        this.emit('dismount');
    }

    /**
     * Dismount the scene and mount the next scene
     *
     * @param {Scene} scene - The next scene to move on to
     */
    next(scene) {
        this.dismount();

        setTimeout(() => {
            scene.mount();
        }, 10);

        return scene;
    }
}

/**
 * Assign the Events mixin
 */
Object.assign(Scene.prototype, Events);

export default Scene;
