import { dynamicSort } from '../../src/utils/utils';

describe('dynamicSort', () => {
    const testArray = [
        {
            name: 'Adam',
            age: 35,
            attributes: {
                height: 200,
                color: 'green',
            }
        },
        {
            name: 'Curt',
            age: 28,
            attributes: {
                height: 250,
                color: 'purple',
            }
        },
        {
            name: 'Bob',
            age: 24,
            attributes: {
                height: 150,
                color: 'orange',
            }
        },
    ];

    it('sorts by string on a single level key', () => {
        const sortedArray = dynamicSort(testArray, 'name');

        expect(sortedArray[0].name).toBe('Adam');
        expect(sortedArray[1].name).toBe('Bob');
        expect(sortedArray[2].name).toBe('Curt');
    });

    it('sorts by number on a single level key', () => {
        const sortedArray = dynamicSort(testArray, 'age');

        expect(sortedArray[0].age).toBe(24);
        expect(sortedArray[1].age).toBe(28);
        expect(sortedArray[2].age).toBe(35);
    });

    it('sorts by string on a dot notated key', () => {
        const sortedArray = dynamicSort(testArray, 'attributes.color');

        expect(sortedArray[0].attributes.color).toBe('green');
        expect(sortedArray[1].attributes.color).toBe('orange');
        expect(sortedArray[2].attributes.color).toBe('purple');
    });

    it('sorts by number on a dot notated key', () => {
        const sortedArray = dynamicSort(testArray, 'attributes.height');

        expect(sortedArray[0].attributes.height).toBe(150);
        expect(sortedArray[1].attributes.height).toBe(200);
        expect(sortedArray[2].attributes.height).toBe(250);
    });
});
