import TextScene from '../../src/scene/text-scene';

describe('TextScene', () => {
    let textScene;

    beforeEach(() => {
        textScene = new TextScene({
            name: 'Test Text Scene',
            text: 'Lorem ipsum dolor sit amet',
            nextScenes: [
                new TextScene({
                    name: 'Test Next Scene 1',
                    text: 'Lorem ipsum dolor sit amet',
                }),
                new TextScene({
                    name: 'Test Next Scene 2',
                    text: 'Lorem ipsum dolor sit amet',
                }),
                new TextScene({
                    name: 'Test Next Scene 3',
                    text: 'Lorem ipsum dolor sit amet',
                }),
            ]
        });
    });

    it('can have text', () => {
        expect(textScene.text).toBe('Lorem ipsum dolor sit amet');
    });

    it('can have an array of scenes to move on to next', () => {
        expect(textScene.nextScenes.length).toBeGreaterThan(0);
    });

    it('can go to one of the next scenes', (done) => {
        let nextScene;
        textScene.on('mount', () => {
            nextScene = textScene.go(2);

            nextScene.on('mount', () => {
                expect(textScene.isMounted).toBe(false);
                expect(nextScene.isMounted).toBe(true);
                expect(nextScene.name).toBe('Test Next Scene 3');

                done();
            });
        });

        textScene.mount();
    });

    it('will default to the first scene if the index does not exist', (done) => {
        let nextScene;
        textScene.on('mount', () => {
            nextScene = textScene.go(1000);

            nextScene.on('mount', () => {
                expect(textScene.isMounted).toBe(false);
                expect(nextScene.isMounted).toBe(true);
                expect(nextScene.name).toBe('Test Next Scene 1');

                done();
            });
        });

        textScene.mount();
    });
});
