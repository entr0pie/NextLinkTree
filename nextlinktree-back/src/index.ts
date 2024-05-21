import express from 'express';
import { Request, Response } from 'express';

import { env } from './env';

const app = express();

app.get('/', (req: Request, res: Response) => {
    return res.send('Hello World!');
});


app.listen(env.PORT, () => {
    console.log(`Server is running on http://localhost:${env.PORT}`);
});