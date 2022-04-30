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
    lidOpen,
    dateAcquired
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
    this.dateAcquired = dateAcquired;
  }
  // Add methods
  toggleLid(lidStatus) {
    this.lidOpen = lidStatus;
  }

  newStrapLength(left, right) {
    this.strapLength.left = left;
    this.strapLength.right = right;
  }

  backpackAge() {
    let now = Date();
    let acquired = new Date(this.dateAcquired);
    let elapsed = now - acquired; // elapsed time in seconds
    let daysSinceAcquired = elapsed / (1000 * 3600 * 24);
    return daysSinceAcquired;
  }
}

module.exports = { Backpack };
