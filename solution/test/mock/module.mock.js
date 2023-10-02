import { jest } from '@jest/globals';

const getUser = jest.fn().mockImplementation(() => (
    [{
        "name": "Steven",
        "age": 36,
        "state": "IL"
    }]
));

export { getUser };