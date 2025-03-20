import express, { Request, Response } from 'express';

const server = express();

server.get('/', (_req: Request, res: Response) => {
    res.send('Olá DEV!');
    return
});

export { server };