const { authJwt } = require("../middleware");
const controller = require("../controllers/data.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/data", controller.getData);

  app.post(
    "/api/data",
    controller.sendData
  );

  app.get(
    "/api/data/:id",
    controller.findData
  );

  app.put(
    "/api/data/:id",
    controller.updateData
  );

  app.delete(
    "/api/data",
    controller.removeData
  );

  app.delete(
    "/api/data/:id",
    controller.removeDataById
  );
};