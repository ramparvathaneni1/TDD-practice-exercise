# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Unit Testing with Jest

## Learning Objectives
---
-   How to implement tests
-   Describe base cases and edge cases
-   Describe and write a unit test


### How do we implement a Unit Test?

In practice, a unit test is made up of an assertion (a statement of truth), and a call to the code we are testing that allows us to check if the assertion is true.

Let’s start by looking at this function:

```javascript
// given a number, determine if that number is even
function isEven(num) {
  return num % 2 == 0;
}
```

Intuitively, we understand that this function should evaluate whether or not a number is even, but how do we verify that the code does that?

Let’s start by writing down our assertions:

- If we call this function with an even number, we expect the function will return true
- If we call this function with an odd number, we expect the function will return false

Let’s see what these expectations look like expressed as code using the testing framework [Jest](<[https://jestjs.io/](https://jestjs.io/)>):

```javascript
test("It should return true when called with an even number", () => {
  expect(isEven(2)).toBe(true);
});
```

Notice how similar the code is to the English language assertions we wrote earlier. Most JavaScript testing frameworks attempt to be as similar to natural language as possible.

In this test, we make calls to three functions that are part of the Jest library. Let’s investigate them now:

- test()
  - This function takes two required arguments:
    1.  The name of the test (this is how we will see the output of the test in our console)
    2.  An anonymous arrow function where we perform the test
- expect()
  - The expect function takes one argument:
      - The value that your code produces.
      - For our Unit Tests, this will always be a call to the function we are testing with specific arguments
- toBe()
  - The toBe() function takes one argument:
    - The value that we expect should be returned by the code inside our expect() function

Methods like 'toBe', 'not', and others like 'toBeTruthy' are what we call matchers in the jest library. There are many built-in jest matchers and alternative third-party libraries that provide additional matchers if you choose to use them. You should familiarize yourself with some of the options you have for writing assertions in jest by reviewing the jest documentation on [using just matchers](https://jestjs.io/docs/using-matchers).

### Running tests and evaluating the results

Once Jest is installed (either globally on your machine, or as a project dependency), you can run your tests by calling `jest` in your terminal. By default, the `jest` command will search your project for any files with the suffix `.test.js`, and run them.

Assuming that we have implemented our `isEven()` function correctly, we should see this output in our terminal when we run our test:

![](https://lh3.googleusercontent.com/NfNkG7Z3Ck9DKSvh3CBqTl8E_5Il31m0I1sNMS-N5TiMK-9V_4qY-gvxLeWZ6efHSD8BBwznMTnJDLTa4J5shEGcyN4z4Ii1keZ_PgFRze1ZwQ4HW6bgOvE2zxGxV2xbpm5u3JFfxXy333QKXsIN3hDMnaeGw0Pkfok8u9_AXPZGuPp2Ow5ZSV4liclxcw)

Let's introduce a bug into our code so we can see what a test `FAIL` looks like:

```javascript
function isEven(num) {
  return num % 2 == 1; // the 0 has been changed to 1
}
```

If we rerun our test, we will see this output:

![](https://lh4.googleusercontent.com/OS1hnU0B97eDAHNPrXXMGfpbXskY-ke10Ixorxq0OwHF7P9TpyLhusdAVqHB72cMN9q0S-QZKRey5kQIdF17x-8xMd5DjjGOKarX_Ttz36JHIY9gM-pJMRZq96hu3QQvXeWHpnlZHLQZedjymSgNPhT39x2A_ch3PlHPLqS-WHRVldcTUQ8khzzSQ9g2eA)

**It might feel intimidating or discouraging to see a test fail. Let’s make an effort to set aside those feelings: a failed test doesn’t mean we failed as a developer, it means we succeeded in finding a bug! Now we have an opportunity to fix that bug before it impacts our users.**

For now, we can focus on two important pieces of information in this `FAIL` message:

1.  The test name: `It should return true when passed an even number`

    - This is the first value we passed to our test() function.
    - We used a descriptive name that helps us recognize what this test does.
    - Using a unique and descriptive name becomes very important when you have dozens or hundreds of tests being run at the same time.
    - You should think of test names like long variable names, they should be sufficiently descriptive that another developer seeing this test for the first time can understand what this test does without reading the code.

2.  The `Expected` vs `Received` values:
    - The `Expected` value is what we told Jest we think the code should return, e.g. what we passed to the `toBe()` function
    - The `Actual` value is what is actually returned by the code we passed to the `expect()` function
    - In a failed test, these two values will be different. It is now your job as the developer to manually investigate your code to find out _why_ they are different.

### What should we test?

When writing unit tests, we should think in terms of inputs and outputs.

Specific input is called a **_test case_**. Typically, a function will require more than one test case to give us confidence that it works as expected. A collection of tests that cover a variety of test cases is called a **_test suite_**. One of the more challenging aspects of writing tests is determining what test cases we should write tests for.

We can categorize different test cases into a variety of groups. Here are two of the most common:

- Common Case:
  - This means covering the usually expected inputs of your code.
  - For example, when we tested `isEven()`, we tried an even number and an odd number.
- Edge Case:
  - This means testing inputs at the edges of the allowed input ranges
  - For example, let’s look at this division function:

```javascript
// divides one number by another number
function divide(a, b) {
  return a / b;
}
```

A sneaky edge case exists for this function, which exists when `b` = 0. Since division by 0 has undefined behavior, we should also write a test that covers a set of inputs where `b` = 0.
