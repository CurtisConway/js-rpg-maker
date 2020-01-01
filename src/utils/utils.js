/**
 * Sort an array of objects by key
 *
 * @param array {array}
 * @param key {string|number}
 * @returns {Array}
 */
export function dynamicSort(array, key) {
    return array.sort((a, b) => {
        let A = key.split('.').reduce((o, i) => o[i], a);
        let B = key.split('.').reduce((o, i) => o[i], b);

        if (typeof A === 'string') {
            A = A.toLowerCase();
            B = B.toLowerCase();

            if (A > B) {
                return 1;
            }

            if (A === B) {
                return 0;
            }

            return -1;
        }

        return A - B;
    });
}
