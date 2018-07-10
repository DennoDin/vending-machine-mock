// your class here
/*
  >>> Don't forget to use module.exports!
  What is that? Well, glad you asked.
  Read about it here: https://www.sitepoint.com/understanding-module-exports-exports-node-js/
*/

const inventory = require("./inventory");

class VendingMachine {
  constructor() {
    this.till = { "10": 10, "50": 10, "100": 10, "500": 10 };
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
      console.log(this.row + this.column);
      let cost = inventory[btnNum][this.column - 1].price;
      if (
        inventory[btnNum][this.column - 1].count > 0 &&
        this.balance >= cost
      ) {
        --inventory[btnNum][this.column - 1].count;
        console.log("Here is your " + inventory[btnNum][this.column - 1].name);
        let change = this.balance - cost;
        let coins = [0, 0, 0, 0];
        while (change > 0) {
          if (change >= 500) {
            this.till["500"]--;
            coins[0]++;
            change = change - 500;
          } else if (change >= 100) {
            this.till["100"]--;
            coins[1]++;
            change = change - 100;
          } else if (change >= 50) {
            this.till["50"]--;
            coins[2]++;
            change = change - 50;
          } else if (change >= 10) {
            this.till["10"]--;
            coins[3]++;
            change = change - 10;
          }
        }
        this.balance = 0;
        console.log(
          "500: " +
            coins[0] +
            ", 100: " +
            coins[1] +
            ", 50: " +
            coins[2] +
            ", 10: " +
            coins[3]
        );
      } else if (this.balance < cost) {
        console.log("Error");
      }
    }
  }
}

module.exports = VendingMachine;
