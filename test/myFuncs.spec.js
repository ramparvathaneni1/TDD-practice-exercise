const {add, multiply, getUserByID } = require('../myFuncs');

describe ('addThese', () => {
    test('Does module have add', () => {
        expect(add).toBeDefined();
    })

    test('Does module have multiply', () => {
        expect(multiply).toBeDefined();
    })

    test('Does module have getUserByID', () => {
        expect(getUserByID).toBeDefined();
    })

    test('myFuncs#add when 3 + 7 should return 10', () => {
        const actual = add(3, 7);
        const expected = 10;
        expect(actual).toEqual(expected);
    })

    test('myFuncs#multiple when 12 * 7 should return 84', () => {
        const actual = multiply(12, 7);
        const expected = 84;
        expect(actual).toEqual(expected);
    })

    test('myFuncs#getUserByID when passed userID 3 will return Mehgan', async () => {
        const actual = await getUserByID(2);
        const expected = {
            "name": "Mehgan",
            "age": 72,
            "state": "IA"
        };
        expect(actual).toEqual(expected);
    });
} )
