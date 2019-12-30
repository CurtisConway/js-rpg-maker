/**
 * This provides methods used for event handling. It's not meant to
 * be used directly.
 *
 * @mixin
 */
const Events = {
    eventHandlers: {},

    /**
    * Add a callback to the event handlers
    *
    * @param {string} event
    * @param {function(Object)} handler
    */
    on(event, handler) {
        const handlers = this.eventHandlers[event] || [];

        handlers.push(handler);

        this.eventHandlers[event] = handlers;
    },

    /**
     * Emit any event handler
     *
     * @param {string} event
     * @param {object} payload - Optional data to pass along with the event
     */
    emit(event, payload = {}) {
        const handlers = this.eventHandlers[event];

        if (!handlers || handlers.length < 1) {
            return;
        }

        handlers.forEach((handler) => {
            handler(payload);
        });
    },
};

export default Events;
