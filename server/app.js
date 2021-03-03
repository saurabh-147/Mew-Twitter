const express = require("express");
const cors = require("cors");

//db connection using monk
const monk = require("monk");
const db = monk("localhost/meower");
const mews = db.get("mews");

const app = express();
app.use(cors());
app.use(express.json());

//Get all mews
app.get("/mews", (req, res) => {
  mews.find().then((mews) => {
    res.json(mews);
  });
});

//Check if mew is valid or not
function isValidMew(mew) {
  return (
    mew.name &&
    mew.name.toString().trim() !== "" &&
    mew.content &&
    mew.content.toString().trim() !== ""
  );
}

//Post new mew in data base
app.post("/mews", (req, res) => {
  if (isValidMew(req.body)) {
    //insert in db
    const mew = {
      name: req.body.name.toString(),
      content: req.body.content.toString(),
      createdAt: new Date(),
    };
    return mews.insert(mew).then((createdMew) => {
      res.status(200).json(createdMew);
    });
  } else {
    res.status(422).json({
      message: "Hwy , Name and content is required",
    });
  }
});

//Listening the server at port 3000
app.listen(3000, () => {
  console.log("Server started at port 3000");
});
