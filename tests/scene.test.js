import Scene from '../src/scene';

describe('scene', () => {
    let scene;

    beforeEach(() => {
        scene = new Scene();
    });

    it('constructs', () => {
        expect(scene.isConstructed).toBe(true);
    });
});
