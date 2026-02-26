import express from "express";
const app = express();
export default app;

app.use(express.json);
//* BODY-PARSING middleware

app.use("/", (req, res, next) => {
  console.log(req.method + " " + req.originalUrl);

  next();
});
//* LOGGING middleware

//todo ADD tracksRouter
//todo ADD playlistRouter

app.use("/", (err, req, res, next) => {
  console.error(err);

  res.status(500).send("Something went wrong");
});
