// your class here
/*
  >>> Don't forget to use module.exports!
  What is that? Well, glad you asked.
  Read about it here: https://www.sitepoint.com/understanding-module-exports-exports-node-js/
*/

const inventory = require("./inventory");

class VendingMachine {
  constructor() {
    this.till = { "10": 0, "50": 0, "100": 0, "500": 0 };
    this.balance = 0;
    this.row;
    this.column;
  }

  insertCoin(int) {
    this.balance += int;
    if (int === 10) {
      this.till["10"]++;
    } else if (int === 50) {
      this.till["50"]++;
    } else if (int === 100) {
      this.till["100"]++;
    } else if (int === 500) {
      this.till["500"]++;
    }
  }

  pressButton(btn) {
    if (btn === "A" || btn === "B" || btn === "C" || btn === "D") {
      this.row = btn;
      console.log(btn);
    } else if (btn <= 4 && btn >= 1) {
      this.column = btn;
      console.log(btn);
      let btnNum;
      if (this.row === "A") {
        btnNum = 0;
      } else if (this.row === "B") {
        btnNum = 1;
      } else if (this.row === "C") {
        btnNum = 2;
      } else if (this.row === "D") {
        btnNum = 3;
      }
      if (inventory[btnNum][this.column - 1].count > 0) {
        --inventory[btnNum][this.column - 1].count;
      }
    }
  }
}

module.exports = VendingMachine;
