const VendingMachine = require("../VendingMachine");
const { expect } = require("chai");
const sinon = require("sinon");

describe("vending machine", () => {
  it("should accept valid coins", () => {
    // Setup
    const machine = new VendingMachine();

    // Exercise
    machine.insertCoin(500);

    // Assert
    expect(machine.till).to.deep.equal({
      10: 10,
      50: 10,
      100: 10,
      500: 11,
    });
    expect(machine.balance).to.equal(500); // Use an ES6 getter
  });

  it("should save and console.log a row letter when selected", () => {
    // Setup
    const machine = new VendingMachine();

    // Exercise
    machine.pressButton("A");

    // Assert
    expect(machine.row).to.equal("A");
    // expect(console.log.calledOnce).to.be.true;
    //expect(console.log.calledWith("A")).to.be.true; //create check for console.log test
  });

  it("should log the row and column to the console when balance and inventory are sufficient and a column is selected", () => {
    //Setup
    const spy = sinon.spy(console, "log");
    const machine = new VendingMachine();
    const inventory = require("../inventory");

    //Exercise
    machine.insertCoin(500);
    machine.insertCoin(500);
    machine.pressButton("A");
    machine.pressButton(1);

    //Assert
    expect(spy.called).to.be.true;
    expect(spy.calledWith("A1")).to.be.true;
    expect(spy.calledWith("Here is your plumbus")).to.be.true;
    expect(inventory[0][0].count).to.equal(4);
    //the correct change should be returned (log type and number of coins to console)
    expect(machine.till).to.deep.equal({
      10: 10,
      50: 9,
      100: 9,
      500: 11,
    });
    // expect(machine.balance-machine.till).to.equal(650)
    expect(spy.calledWith("500: 1, 100: 1, 50: 1, 10: 0")).to.be.true;
    expect(machine.balance).to.equal(0);
  });

  it("should return 0 the balance is checked after the machine is created", () => {
    //Setup
    const machine = new VendingMachine();
    //Assert
    expect(machine.balance).to.equal(0);
  });
});
