// mock the axios library
jest.mock('axios');

// import the module that uses axios
const myModule = require('./myModule');

test('should return user data', async () => {
  // define the mock response from axios
  const mockResponse = { data: { name: 'John', age: 30 } };
  axios.get.mockResolvedValue(mockResponse);

  // call the function that uses axios
  const userData = await myModule.getUserData();

  // check the expected result
  expect(userData).toEqual(mockResponse.data);
});
