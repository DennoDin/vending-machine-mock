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
    this.till[int]++;
  }

  pressButton(btn) {
    if (
      typeof btn === "string" &&
      btn.charCodeAt(0) >= 65 &&
      btn.charCodeAt(0) <= 68
    ) {
      this.row = btn;
      console.log(btn);
    } else if (btn <= 4 && btn >= 1) {
      this.column = btn;
      let btnNum = this.row.charCodeAt(0) - 65;
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
            // this.till[500] = this.till[500] - change / 500;
            // coins[0] = change / 500;
            // change = change % 500;
          } else if (change >= 100) {
            this.till["100"]--;
            coins[1]++;
            change = change - 100;
            // this.till[100] = this.till[100] - change / 100;
            // coins[1] = change / 100;
            // change = change % 100;
          } else if (change >= 50) {
            this.till["50"]--;
            coins[2]++;
            change = change - 50;
            // this.till[50] = this.till[50] - change / 50;
            // coins[0] = change / 500;
            // change = change % 500;
          } else if (change >= 10) {
            this.till["10"]--;
            coins[3]++;
            change = change - 10;
            // this.till[10] = this.till[10] - change / 10;
            // coins[0] = change / 10;
            // change = change % 10;
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
