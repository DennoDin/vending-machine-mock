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
      10: 0,
      50: 0,
      100: 0,
      500: 1,
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
    // expect("a message should be logged stating "Here is your [item name]")
    expect(spy.calledWith("Here is your plumbus"));
    expect(inventory[0][0].count).to.equal(4);
    // expect("return change")
  });

  it("should return 0 the balance is checked after the machine is created", () => {
    //Setup
    const machine = new VendingMachine();
    //Assert
    expect(machine.balance).to.equal(0);
  });
});
