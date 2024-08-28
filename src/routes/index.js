const express = require('express');
const router = express.Router();

const pool = require('./connection');
// Ruta principal
router.get('/', async(req, res) => {
    try {
        const [rows, fields] = await pool.query('SELECT * FROM inventario');
        console.table(rows);
        res.json(rows);
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error al obtener las carreras' });
      }
});
router.get('/:id', async(req, res) => {
  try {
      const [rows, fields] = await pool.query('SELECT * FROM inventario where id=?',[req.params.id]);
      console.log(rows);
      res.json(rows);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Error al obtener las carreras' });
    }
});


module.exports = router;