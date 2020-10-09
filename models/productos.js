const productos = [
  {
    id: 1,
    titulo: "Laika",
    descripcion: "Beagle",
  },
  {
    id: 2,
    titulo: "Capitan Spock",
    descripcion: "Barcino",
  },
  {
    id: 3,
    titulo: "PanzerKampfWagen VIII Maus",
    descripcion: "Collie-Labrador",
  },
];
//select * from productos;
const getAll = () => productos;
//select * from productos where id = 1
const getSingle = (id) => productos.find((producto) => producto.id == id);
//Post-Push
const create = (obj) => productos.push(obj);
//Delete
const del = (id, habilitado = 0) => {
  const index = productos.findIndex((producto = producto.id == id));
  productos[index]["habilitado"] = habilitado; //producto[1][0]
};

//Exportar la funcion getAll
module.exports = {
  getAll,
  getSingle,
  create,
  del,
};
