const exercise = require("../exercise1");

describe("FizzBuzz", () => {
  it("should throws 'Input should be a number' if input is not number", () => {
    expect(() => {
      exercise.fizzBuzz("not a number");
    }).toThrow();
  });

  it("should return FizzBuzz if input is divisible by 3 and 5", () => {
    const response = exercise.fizzBuzz(15);
    expect(response).toBe("FizzBuzz");
  });

  it("should return Fizz if input is divisible by 3", () => {
    const response = exercise.fizzBuzz(9);
    expect(response).toBe("Fizz");
  });

  it("should return Buzz if input is divisible by 5", () => {
    const response = exercise.fizzBuzz(10);
    expect(response).toBe("Buzz");
  });

  it("should return input if input is not divisible by 5 or 3", () => {
    const response = exercise.fizzBuzz(8);
    expect(response).toBe(8);
  });
});
