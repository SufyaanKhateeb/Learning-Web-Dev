const express = require("express");
const app = express();
const path = require("path");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { title: "Express" });
});

app.get("/file/:name", (req, res) => {
  res.sendFile(path.join(__dirname, `public/${req.params.name}.md`), "text.md");
  // res.download(path.join(__dirname,'public/helloworld.md'),'text.md');
  // res.render("index", { title: "Express" });
  // res
  // .status(201)
  // .cookie("token", "test", {
  //   expire: new Date(Date.now() + 8 * 3600000),
  // })
  // .cookie("hello", "hello")
  // .redirect(301, "/admin");
});

app.listen(3000, () => console.log("listening at localhost:3000"));
