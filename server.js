const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
const cors = require("cors");
require("dotenv").config({ path: "./config.env"});
const port = process.env.PORT || 5000;
app.use(cors());
//app.use(require("./routes/record"));


// Accessing the path module
const path = require("path");

// This is the static that is going to be served, have to resolve
app.use(express.static(path.resolve(__dirname, "./wodzisz-portfolio/build")));

// We send whichever file
app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "./wodzisz-portfolio/build", "index.html"));
});
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
}); 