/**
 * Event
 *
 * @param {object} emitter
 * @param {object} payload
 */
const Event = (emitter, payload = {}) => ({
    emitter,
    payload,
    time: performance.now(),
});

/**
 * This provides methods used for event handling. It's not meant to
 * be used directly.
 *
 * @mixin
 */
const Events = {
    eventHandlers: {},

    /**
    * Add an event listener by event name
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
     * Emit any event listener by event name
     *
     * @param {string} eventName
     * @param {object} payload - Optional data to pass along with the event
     */
    emit(eventName, payload = {}) {
        const handlers = this.eventHandlers[eventName];

        if (!handlers || handlers.length < 1) {
            return;
        }

        const event = Event(this, payload);

        handlers.forEach((handler) => {
            handler(event);
        });
    },
};

export default Events;
