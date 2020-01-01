import Scene from './scene';

/**
 * @class TextScene
 * @augments Scene
 */
class TextScene extends Scene {
    /**
     * Construct the text scene
     *
     * @param {object} params
     * @param {string} params.name - the name of the scene
     * @param {function(Object)} [params.onMount] - event handler for the mount event
     * @param {function(Object)} [params.onDismount] - event handler for the dismount event
     * @param {string} params.text - The text for the scene to display
     *
     * @constructor
     */
    constructor({
        name,
        onMount,
        onDismount,
        text = '',
        nextScenes = [],
    }) {
        super({
            name,
            onMount,
            onDismount,
        });

        this.text = text;
        this.nextScenes = nextScenes;
    }

    /**
     * Go to one of the next scenes if it exists
     * defaults to the first item if the index doesn't exist
     *
     * @param {number} index
     */
    go(index) {
        const nextScene = this.nextScenes[index] || this.nextScenes[0];

        return this.next(nextScene);
    }
}

export default TextScene;
