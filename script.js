const fs = require("fs");

fs.unlink("Alpha.txt", function (error) {
  if (error) {
    console.log(error);
  } else {
    console.log("Deleted !");
  }
});
