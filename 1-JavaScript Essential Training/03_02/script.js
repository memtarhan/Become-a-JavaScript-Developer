// const backpack = {}
const backpack = {
  name: "Backpack #1",
  color: "grey",
  volume: 30,
  pocketCount: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  lidOpen: false,
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (left, right) {
    this.strapLength.left = left;
    this.strapLength.right = right;
  },
};

backpack.toggleLid(true);
console.log(backpack);

var query = "pocketCount";
console.log("The pocket count is: " + backpack[query]);
console.log("The pocket count is: " + backpack.pocketCount);

const album = {
  title: "Living Things",
  year: "2012",
  artist: "Linkin Park",
  songCount: 12,
  favorite: false,
  toggleFavorite: function (favorite) {
    this.favorite = favorite;
  },
};

console.log(album);
album.toggleFavorite(true);
console.log("One of my favorite albums is " + album.title);
