// This is meant to spoof an API call that we will unit test wiht jest

const fakeUserData = {
    0: {
        "name": "Steven",
        "age": 36,
        "state": "IL"
    },
    1: {
        "name": "jody",
        "age": 21,
        "state": "OH"
    },
    2: {
        "name": "Mehgan",
        "age": 72,
        "state": "IA"
    },
    3: {
        "name": "Mark",
        "age": 12,
        "state": "CA"
    },
    4: {
        "name": "Rudy",
        "age": 15,
        "state": "NJ"
    },
    5: {
        "name": "Manny",
        "age": 47,
        "state": "TX"
    },
    6: {
        "name": "Doug",
        "age": 31,
        "state": "NC"
    },
    7: {
        "name": "Michael",
        "age": 63,
        "state": "IL"
    },
    8: {
        "name": "Drew",
        "age": 17,
        "state": "TX"
    },
    9: {
        "name": "Thomas",
        "age": 81,
        "state": "IL"
    }
}

const getUser = (userID) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = fakeUserData[userID];
            if (user) {
                resolve(user);
            } else [
                reject(`User Not found with ID ${userID}`)
            ]
          }, 300);
    })
}

module.exports = { getUser }