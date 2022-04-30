const { Backpack } = require("./backpack");

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "black",
  10,
  20,
  20,
  false
);

const gymPack = new Backpack("This is GYM time", 60, "red", 20, 30, 30, true);

console.log("The everydayPack is:" + everydayPack.name);
console.log("The pocketCount is:", everydayPack.pocketCount);

console.log("The gymPack is:" + gymPack.name);
console.log("The color is:", gymPack.color);
