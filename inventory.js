const plumbus = { name: `plumbus`, price: 350, count: 5 };
const coffee = { name: "Tully's", price: 250, count: 7 };
const pen = { name: "pen", price: 150, count: 5 };
const keyboard = { name: `keyboard`, price: 400, count: 4 };
const mouse = { name: "mouse", price: 300, count: 2 };
const cp = { name: "cp", price: 300, count: 0 };
const water = { name: `water`, price: 100, count: 5 };
const soda = { name: "soda", price: 250, count: 7 };
const parcel = { name: "parcel", price: 150, count: 5 };
const ok = { name: `ok`, price: 350, count: 5 };
const no = { name: "no", price: 250, count: 7 };
const yes = { name: "yes", price: 150, count: 5 };
const soso = { name: `soso`, price: 350, count: 5 };
const tea = { name: "tea", price: 250, count: 7 };
const bottle = { name: "bottle", price: 150, count: 5 };
const bread = { name: "bread", price: 150, count: 5 };

const inventory = [
  [plumbus, coffee, pen, keyboard],
  [mouse, cp, water, soda],
  [parcel, ok, no, yes],
  [soso, tea, bottle, bread],
];

module.exports = inventory;
