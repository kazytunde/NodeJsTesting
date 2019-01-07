const lib = require("../lib");

describe("absolute", () => {
  it("should return positive if input is positive number", () => {
    const results = lib.absolute(1);
    expect(results).toBe(1);
  });

  it("should return positive if input is negative number", () => {
    const results = lib.absolute(-1);
    expect(results).toBe(1);
  });

  it("should return 0 if input is 0", () => {
    const results = lib.absolute(0);
    expect(results).toBe(0);
  });
});
describe("greet", () => {
  it("should return the greetimg message", () => {
    const message = lib.greet("Mosh");
    //expect(message).toMatch(/Mosh/);
    expect(message).toContain("Mosh");
  });
});
describe("getCurrencies", () => {
  it("should return the correct currencies", () => {
    const response = lib.getCurrencies();
    //expect(response).toContain("USD");
    expect(response).toEqual(expect.arrayContaining(["USD", "AUD", "EUR"]));
  });
});
describe("getProduct", () => {
  it("should return the product with the given ID", () => {
    const response = lib.getProduct(10);
    //This will only check we have the key/value pair specified in the object you have
    //passed to 'toMatchObject' even if the actual object have more properties
    expect(response).toMatchObject({ id: 10, price: 10 });
    expect(response).toHaveProperty("id", 10);
  });
});

describe("registerUser", () => {
  it("should throws if username is falsy", () => {
    //null, NaN, undefined, '', 0, false are all falsy

    const args = [null, NaN, undefined, "", 0, false];
    args.forEach(arg => {
      expect(() => {
        lib.registerUser(arg);
      }).toThrow();
    });
  });

  it("should return a user object if valid username is passed", () => {
    const username = "kacytunde";
    const response = lib.registerUser(username);
    expect(response).toMatchObject({ username });
    expect(response.id).toBeGreaterThan(0);
  });
});

describe("greet", () => {
  it("should return the greetimg message", () => {
    const message = lib.greet("Mosh");
    //expect(message).toMatch(/Mosh/);
    expect(message).toContain("Mosh");
  });
});
