module.exports = (app) => {
  app.get("/bennyl", (req, res) => {
    res.send("This is a bennyL route!");
  });
};
