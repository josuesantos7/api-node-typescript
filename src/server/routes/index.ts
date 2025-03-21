import { Router } from "express";
import { StatusCodes } from 'http-status-codes'


const router = Router();

router.get('/', (_, res) => {
    res.send('Olá DEV!');
    return;
});

router.post('/', (req, res) => {
    console.log(req.body);
    res.status(StatusCodes.CREATED).json(req.body);
    return;
});



export { router };