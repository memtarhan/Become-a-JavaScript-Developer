const { Backpack } = require("./Backpack");

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "black",
  10,
  20,
  20,
  false,
  "December 5, 2018 15:00:00 PST"
);

console.log("The everydayPack is " + everydayPack);
console.log("The everydayPack's acquired date is " + everydayPack.dateAcquired);
console.log("The everydayPack's age is " + everydayPack.backpackAge());
