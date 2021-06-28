const express = require("express");
const session = require("express-session");
const app = express();

app.use(
  session({
    resave: false, //No guarde la cookie cada vez que se haga un cambio
    saveUninitialized: false, //Sí la cookie no se ha inicializado, no la guarde por defecto
    secret: "keyboard cat", //Debe ser un string de al menos 256bits.
    //define que cuando la cookie es segura, la cifre con este secret
  })
);

app.get("/", (req, res) => {
  req.session.count = req.session.count ? req.session.count + 1 : 1;
  res.status(200).json({
    hello: "world",
    counter: req.session.count,
  });
});

app.listen(3000, () => {
  console.log("Escuchando en http://localhost:3000");
});
