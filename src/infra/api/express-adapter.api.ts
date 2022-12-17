import express, { Request, Response } from 'express';
import { HttpServer, methodType } from './http-server.api';

export class ExpressAdapter implements HttpServer{
    private readonly app: express.Express;
    constructor() {
        this.app = express();
        this.app.use(express.json());
    }

    public on(method: methodType, url: string, callback: Function) {
        this.app[method](url, async (req: Request, res: Response) => {
            const output = await callback(req.params, req.body);

            return res.json(output);
        });
    }

    public listen(port: number) {
        this.app.listen(port, () => console.log(`server is running at http://localhost:${port}`));
    }

}
