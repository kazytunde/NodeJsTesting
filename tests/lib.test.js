const lib = require("../lib");
const db = require("../db");
const mail = require("../mail");

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

describe("applyDiscount", () => {
  it("should apply discount of 10% if customer has more than 10 points", () => {
    db.getCustomerSync = customerId => {
      console.log("Fake reading customer");
      return { id: customerId, points: 20 };
    };
    const order = { customerId: 1, totalPrice: 10 };
    lib.applyDiscount(order);
    expect(order.totalPrice).toBe(9);
  });
});

describe("notifyCustomer", () => {
  it("should send email to customer", async () => {
    db.getCustomerSync = jest.fn().mockReturnValue({ email: "a" });
    //This is mock to make sure this function was called, when notifyCustomer was called.
    mail.send = jest.fn();

    lib.notifyCustomer({ customerId: 1 });

    //'toHaveBeenCalledWith("a", "..")' This works with numbers, boolean or objects but not strings
    expect(mail.send).toHaveBeenCalled();

    //To validate the arguments passed to the function
    //mock.calls is an array of all the calls to this function
    //calls[0][0] first call , then first argument
    //calls[0][1] first call , then second argument
    expect(mail.send.mock.calls[0][0]).toBe("a");
    //regular expression to check the word 'order' is contained in that argument
    expect(mail.send.mock.calls[0][1]).toMatch(/order/);
  });
});

describe("JestMocking", () => {
  it("should test demo jest mocking", async () => {
    const mockFunction = jest.fn();
    //mockFunction.mockReturnValue(1); Sync
    mockFunction.mockResolvedValue(1); //  Async;
    //mockFunction.mockRejectedValue(new Error("Username is required."));

    const result = await mockFunction();
    expect(result).toBe(1);
  });
});
