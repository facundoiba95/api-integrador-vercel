import { Router } from "express";

const router = Router();

router.post('/', async ( req,res ) => {
    res.json({
        description: 'Api de trabajo integrador Modulo de React JS. NUCBA',
        author: 'Facundo ibañez gambarte'
    })
})

export default router;
