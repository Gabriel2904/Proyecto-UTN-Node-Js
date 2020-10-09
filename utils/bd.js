const knex = require("knex")({
  client: "mysql",
  connection: {
    host: "localhost",
    user: "root",
    password: "",
    database: "inscripciones",
    pool: { min: 1, max: 10 },
  },
}); // referencia de la conexiónmodule.exports = knex;
