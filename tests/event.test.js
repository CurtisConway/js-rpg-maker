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
        events.on('testEvent', ({payload}) => {
            expect(payload).toHaveProperty('test');

            done();
        });

        events.emit('testEvent', {
            test: true,
        });
    });

    it('can get the emitter', (done) => {
        events.on('testEvent', ({emitter}) => {
            expect(emitter).toBeDefined();

            done();
        });

        events.emit('testEvent', {
            test: true,
        });
    });

    it('can get the time of the event', (done) => {
        events.on('testEvent', ({time}) => {
            expect(time).toBeGreaterThan(0);

            done();
        });

        events.emit('testEvent', {
            test: true,
        });
    });
});
