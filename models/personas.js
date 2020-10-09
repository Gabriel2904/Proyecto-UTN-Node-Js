const bd = require("./../utils/bd");
const getAll = () => bd("personas").select("*");
const getSingle = (id) =>
  bd("personas")
    .where({ id, habilitado: true })
    .select("id", "nombre", "apellido", "mail", "telefono"); // Row datamodule.exports = { getAll, getSingle };
