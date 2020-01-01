import Unit from '../../src/unit/unit';

describe('Unit', () => {
    let unit;

    beforeEach(() => {
        unit = new Unit({
            name: 'Test Unit',
            totalHealth: 100,
            currentHealth: 60,
            armor: 100,
            speed: 10,
            strength: 10,
            onSpawn: () => ({}),
            onDeath: () => ({}),
        });
    });

    it('can have a name', () => {
        expect(unit.name).toBe('Test Unit');
    });

    it('has a total health', () => {
        expect(unit.attributes.totalHealth).toBe(100);
    });

    it('has a current health', () => {
        expect(unit.attributes.currentHealth).toBe(60);
    });

    it('has an armor value', () => {
        expect(unit.attributes.armor).toBe(100);
    });

    it('has a speed value', () => {
        expect(unit.attributes.speed).toBe(10);
    });

    it('has a strength value', () => {
        expect(unit.attributes.strength).toBe(10);
    });

    it('can have a spawn event handler', () => {
        expect(unit.eventHandlers.spawn.length).toBeGreaterThan(0);
    });

    it('can have a death event handler', () => {
        expect(unit.eventHandlers.death.length).toBeGreaterThan(0);
    });

    it('can be damaged', () => {
        unit.damage(10);

        expect(unit.attributes.currentHealth).toBe(50);
    });

    it('can die', (done) => {
        unit.on('death', () => {
            expect(unit.alive).toBe(false);

            done();
        });

        unit.damage(100);
    });

    it('can respawn', (done) => {
        unit.on('death', () => {
            unit.spawn();
        });

        unit.on('spawn', () => {
            expect(unit.name).toBe('Test Unit');
            expect(unit.attributes.totalHealth).toBe(100);
            expect(unit.attributes.currentHealth).toBe(100);
            expect(unit.attributes.armor).toBe(100);
            expect(unit.attributes.speed).toBe(10);
            expect(unit.attributes.strength).toBe(10);

            done();
        });

        unit.damage(100);
    });

    it('can be healed', () => {
        unit.heal(10);

        expect(unit.attributes.currentHealth).toBe(70);
    });

    it('cant be over healed', () => {
        unit.heal(10000);

        expect(unit.attributes.currentHealth).toBe(unit.attributes.totalHealth);
    });
});
