const express = require("express");
const router = express.Router();
const { getAll, getSingle, create, del } = require("../models/productos");

/* GET products listing. */
router.get("/all", (req, res, next) => {
  const data = getAll();
  res.json(data);
});

//localhot:3000/noticias/single/1
router.get("/single/:id", (req, res) => {
  //:id crear una variable id = 1
  //localhots:3000/productos/1
  const { id } = req.params;
  const data = getSingle(id);
  res.json(data);
});

router.post("/new", (req, res) => {
  const { body } = req;
  const data = create(body);
  res.json({ id: data });
});

router.delete("/delete/:id", (req, res) => {
  const { id } = req.params;
  del(id);
});

module.exports = router;
