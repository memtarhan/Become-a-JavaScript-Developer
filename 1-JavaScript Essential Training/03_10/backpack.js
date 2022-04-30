function Backpack(
  name,
  volume,
  color,
  pocketCount,
  strapLengthL,
  strapLengthR,
  lidOpen
) {
  this.name = name;
  this.volume = volume;
  this.color = color;
  this.pocketCount = pocketCount;
  this.strapLength = {
    left: strapLengthL,
    right: strapLengthR,
  };
  this.lidOpen = lidOpen;

  this.toggleLid = function toggleLid(lidStatus) {
    this.lidOpen = lidStatus;
  };

  this.newStrapLength = function newStrapLength(left, right) {
    this.strapLength.left = left;
    this.strapLength.right = right;
  };
}

module.exports = { Backpack };
