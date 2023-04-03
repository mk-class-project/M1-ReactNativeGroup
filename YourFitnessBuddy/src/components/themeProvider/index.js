const imageA = require("../../../src/images/ArnoldBuddy.jpg");
const imageR = require("../../../src/images/RonnieBuddy.jpg");
const imageC = require("../../../src/images/CbumBuddy.png");

export default BuddyThemes = {
  Ronnie: {
    image: imageR,
    title: "Ronnie Coleman",
    colorGrey: "#A9A9A9",
    colorWhite: "#FFFFFF",
    colorBlockOpacity: "rgba(0, 0, 0, 0.2)",
  },
  Arnold: {
    image: imageA,
    title: "Arnold Schwarzenegger",
    colorGrey: "#A9A9A9 ",
    colorWhite: "#FFFFFF",
  },
  Cbum: {
    image: imageC,
    title: "Chris Bumstead",
    colorGrey: "#A9A9A9 ",
    colorWhite: "#FFFFFF",
  }
};
