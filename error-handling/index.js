module.exports = (app) => {
  app.use((req, res, next) => {
    res.status(404).json({ message: "This route does not exist" });
  });

  app.use((err, req, res, next) => {
    console.error("ERROR", req.method, req.path, err);

    //Validation error o unique, mirar videos german e integrarlo para gestion de errores 
    if (!res.headersSent) {
      res
        .status(500)
        .json({
          message: "Internal server error. Check the server console",
        });
    }
    
  });
};
