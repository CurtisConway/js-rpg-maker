import Scene from '../../src/scene/scene';

describe('Scene', () => {
    it('can have a name', () => {
        const scene = new Scene({
            name: 'Test Scene',
        });

        expect(scene.name).toBe('Test Scene');
    });

    it('can add an onMount handler', () => {
        const scene = new Scene({
            name: 'Test Scene',
            onMount: () => ({})
        });

        expect(scene.eventHandlers.mount.length).toBeGreaterThan(0);
    });

    it('can add an onDismount handler', () => {
        const scene = new Scene({
            name: 'Test Scene',
            onDismount: () => ({})
        });

        expect(scene.eventHandlers.dismount.length).toBeGreaterThan(0);
    });

    it('can mount', (done) => {
        const scene = new Scene({
            name: 'Test Scene',
            onMount: () => {
                expect(scene.isMounted).toBe(true);

                done();
            }
        });

        scene.mount();
    });

    it('can dismount', (done) => {
        const scene = new Scene({
            name: 'Test Scene',
            onMount: () => {
                scene.dismount();
            },
            onDismount: () => {
                expect(scene.isMounted).toBe(false);

                done();
            },
        });

        scene.mount();
    });

    it('can move on to the next scene', (done) => {
        const sceneOne = new Scene({
            name: 'Test Scene',
            onMount: () => {
                const sceneTwo = sceneOne.next(
                    new Scene({
                        name: 'Test Scene Two',
                        onMount: () => {
                            expect(sceneOne.isMounted).toBe(false);
                            expect(sceneTwo.isMounted).toBe(true);

                            done();
                        }
                    })
                );
            }
        });

        sceneOne.mount();
    });
});
