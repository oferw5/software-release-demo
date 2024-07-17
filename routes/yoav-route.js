module.exports = (app) => {
  app.get("/yoav", (req, res) => {
    res.send("Yoav was here, he created this icredible route and brought it before us");
  });
};
