import BattleScene from '../../src/scene/battle-scene';
import Unit from '../../src/unit/unit';

describe('BattleScene', () => {
    let battleScene;

    beforeEach(() => {
        battleScene = new BattleScene({
            name: 'Test Battle Scene',
            text: 'Lorem ipsum dolor sit amet',
            friendlyTeam: [
                new Unit({
                    name: 'Test Friendly Unit',
                    speed: 5,
                })
            ],
            enemyTeam: [
                new Unit({
                    name: 'Test Enemy Unit',
                    speed: 10,
                })
            ]
        });
    });

    it('can have text', () => {
        expect(battleScene.text).toBe('Lorem ipsum dolor sit amet');
    });

    it('can have a friendly team', () => {
        expect(battleScene.friendlyTeam.length).toBeGreaterThan(0);
    });

    it('can have an enemy team', () => {
        expect(battleScene.enemyTeam.length).toBeGreaterThan(0);
    });

    it('can determine the turn order based on speed', () => {
        expect(battleScene.turnOrder).toMatchObject(
            ['Test Enemy Unit', 'Test Friendly Unit']
        );
    });

    it('can get the current attacker', () => {
        expect(battleScene.currentAttacker).toBe('Test Enemy Unit');
    });
});
