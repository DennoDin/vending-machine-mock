// your class here
/*
  >>> Don't forget to use module.exports!
  What is that? Well, glad you asked.
  Read about it here: https://www.sitepoint.com/understanding-module-exports-exports-node-js/
*/
class VendingMachine {
  constructor() {
    this.till = { "10": 0, "50": 0, "100": 0, "500": 0 };
    this.balance = 0;
    this.row = "A";
    this.column = 0;
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
}

module.exports = VendingMachine;
