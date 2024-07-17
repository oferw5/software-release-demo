module.exports = (app) => {
  app.get("/OferW", (req, res) => {
    res.send("This is an OferW route!");
  });
};
