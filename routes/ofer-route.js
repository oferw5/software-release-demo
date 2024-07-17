module.exports = (app) => {
  app.get("/ofer", (req, res) => {
    res.send("This is an ofer route!");
  });
};
