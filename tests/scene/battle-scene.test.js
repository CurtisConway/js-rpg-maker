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
                    strength: 10,
                    armor: 200,
                    totalHealth: 100,
                    currentHealth: 100,
                })
            ],
            enemyTeam: [
                new Unit({
                    name: 'Test Enemy Unit',
                    speed: 10,
                    strength: 10,
                    armor: 200,
                    totalHealth: 100,
                    currentHealth: 100,
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

    it('can end the current turn', () => {
        battleScene.endTurn();

        expect(battleScene.currentAttacker).toBe('Test Friendly Unit');
    });

    it('will recalculate the turn order if it reaches the end', () => {
        battleScene.endTurn();
        battleScene.endTurn();

        expect(battleScene.currentAttacker).toBe('Test Enemy Unit');
    });

    it('a unit can attack another unit', (done) => {
        battleScene.on('attack', (event) => {
            expect(battleScene.enemyTeam[0].attributes.currentHealth).toBeLessThan(100);
            expect(battleScene.enemyTeam[0].attributes.currentHealth)
                .toEqual(event.payload.defender.attributes.currentHealth);

            done();
        });

        battleScene.attack(
            battleScene.friendlyTeam[0],
            battleScene.enemyTeam[0],
            10,
        );
    });

    describe('calculateDamage', () => {
        it('increases the damage by 1 for every 2 strength the attacker has', () => {
            const damage = BattleScene.calculateDamage(
                new Unit({
                    name: 'Test Attacker',
                    strength: 10,
                }),
                new Unit({
                    name: 'Test Defender',
                }),
                10,
            );

            expect(damage).toBe(15);
        });

        it('reduces the damage by 1 for every 100 armor the defender has', () => {
            const damage = BattleScene.calculateDamage(
                new Unit({
                    name: 'Test Attacker',
                }),
                new Unit({
                    name: 'Test Defender',
                    armor: 200,
                }),
                10,
            );

            expect(damage).toBe(8);
        });

        it('calculates both at the same time', () => {
            const damage = BattleScene.calculateDamage(
                new Unit({
                    name: 'Test Attacker',
                    strength: 10,
                }),
                new Unit({
                    name: 'Test Defender',
                    armor: 200,
                }),
                10,
            );

            expect(damage).toBe(13);
        });
    })
});
