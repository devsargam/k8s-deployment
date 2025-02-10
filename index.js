const express = require("express");

const app = express();

app.get("/", (_, res) => {
  res.json({ msg: "hello world" });
})

app.listen(3000, () => {
  console.log("Server is running");
})
