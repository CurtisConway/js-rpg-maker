import Events from '../src/utils/event';

class TestEvents {}

Object.assign(TestEvents.prototype, Events);

describe('Events', () => {
    let events;

    beforeEach(() => {
        events = new TestEvents();
    });

    it('can add an event handler', () => {
        events.on('testEvent', () => ({}));

        expect(events.eventHandlers.testEvent.length).toBeGreaterThan(0);
    });

    it('can emit an event with a payload', (done) => {
        events.on('testEvent', (payload) => {
            expect(payload).toHaveProperty('test');

            done();
        });

        events.emit('testEvent', {
            test: true,
        });
    });
});
