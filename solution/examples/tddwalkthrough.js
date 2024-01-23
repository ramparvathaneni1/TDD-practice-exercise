const tests = []

function runTest() {
    let passedTest = 0

    tests.forEach(({ testName, testFn}) => {
        try {
           const result = testFn() 
           console.log(`Test Passed: ${testName}, ${result}`)
           passedTest++
        } catch (error) {
            throw new Error(`Failed: ${testName}\n ${error.message} `)
            // console.error(` Failed: ${testName}\n ${error.message}`)
        }
    })

    console.log(`Ran ${tests.length} Tests, ${passedTest} Passed, ${tests.length - passedTest} Failed`)

}

function addTest(testName, testFn) {
    tests.push({ testName, testFn})
}

function expect(expectedValue, resultingValue) {
    if (expectedValue === resultingValue) {
        console.log(`Test Passed: ${expectedValue} is equal to ${resultingValue}`)
        return true;
    } else {
        throw new Error(`Test Failed: ${expectedValue} is not equal to ${resultingValue}`)
    
    }
}

function add(num1, num2) {
    
    return num1 + num2
}

addTest("Addition of 2 and 2 equals 4", () => expect(add(2,5), 6))
addTest("Addition of 2 and 2 equals 4", function() {expect(add(2,2), 4)})
addTest("Addition of 2 and 2 equals 4", function() {expect(add(2,2), 4)})

runTest()