// Calculator functions
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed!");
    }
    return a / b;
}

// Test the calculator functions
function testCalculator() {
    console.assert(add(2, 3) === 5, "Test failed: add(2, 3) should return 5");
    console.assert(subtract(5, 3) === 2, "Test failed: subtract(5, 3) should return 2");
    console.assert(multiply(4, 3) === 12, "Test failed: multiply(4, 3) should return 12");
    console.assert(divide(6, 3) === 2, "Test failed: divide(6, 3) should return 2");

    try {
        divide(6, 0);
        console.error("Test failed: divide(6, 0) should throw an error");
    } catch (error) {
        console.log("Test passed: divide(6, 0) correctly threw an error");
    }

    console.log("All calculator tests passed!");
}

// Run the tests
testCalculator();