let testFunctions = require('./functions')

test("Return Two test", () => {
    expect(testFunctions.returnTwo()).toBe(2)
})

test("greeting test", () => {
    expect(testFunctions.greeting("James")).toBe("Hello, James.")
    expect(testFunctions.greeting("Jill")).toBe("Hello, Jill.")
}) 

test("add test", () => {
    expect(testFunctions.add(1,2)).toBe(3)
    expect(testFunctions.add(5,9)).toBe(14)
})