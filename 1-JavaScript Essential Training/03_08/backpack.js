/**
 * Creating classes:
 *
 * Class declaration: class Name {}
 * Class expression: const Name = class {}
 */

class Backpack {
  constructor(
    // Define parameters:
    name,
    volume,
    color,
    pocketCount,
    strapLengthL,
    strapLengthR,
    lidOpen
  ) {
    // Define properties
    this.name = name;
    this.volume = volume;
    this.color = color;
    this.pocketCount = pocketCount;
    this.strapLength = {
      left: strapLengthL,
      right: strapLengthR,
    };
    this.lidOpen = lidOpen;
  }
  // Add methods
  toggleLid(lidStatus) {
    this.lidOpen = lidStatus;
  }

  newStrapLength(left, right) {
    this.strapLength.left = left;
    this.strapLength.right = right;
  }
}

module.exports = { Backpack };
