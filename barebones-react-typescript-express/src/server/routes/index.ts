import * as express from 'express';
import chirpsRouter from './chirps';
const router = express.Router();

// localhost:PORT/api/chirps
router.use("/chirps", chirpsRouter);


// router.get('/api/sup', (req, res, next) => {
//     let id = req.params.id;
//     res.json('y\'all');
//     if (id) {
//         res.json(GetChirp(id));
//     }else{
//         res.send(GetChirp());
//     }

//     });



export default router;