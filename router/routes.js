const express = require("express");
const connection = require("../Connection/connection");
const router = express.Router();
const controller = require("../controller/controller");

router.get('/', controller.index);
router.get('/index', controller.inicio);
router.get('/formulario', controller.formulario);
router.get('/guardados', controller.guardados);
router.get('/paginacion', controller.paginacion);
router.post('/index', controller.index);
router.post('/cotizador', controller.cotizador);
router.post('/guardados', controller.guardados);
router.post('/eliguardatos', controller.eliguardatos);
router.get('/formulario/:id', (req,res)=>{
    const id = req.params.id;
    connection.query('SELECT * FROM producto WHERE id=?',[id] , (error, results) => {
        if (error) {
            throw error;
        }else{            
            res.render('formulario', {datos:results[0]});
        }        
    });
});
module.exports = router;