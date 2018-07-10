const VendingMachine = require("../VendingMachine");
const { expect } = require("chai");

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
    const machine = new VendingMachine();

    //Exercise
    machine.pressButton("A");
    machine.pressButton(1);

    //Assert
    // expect(console.log.calledOnce).to.be.true;
    // expect(console.log.calledWith("A1")).to.be.true;
  });
});
