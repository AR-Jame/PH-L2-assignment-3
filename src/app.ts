import express, { type Application, type NextFunction, type Request, type Response } from 'express';
import { booksRouter } from './app/routes/books.route';
import { borrowRouter } from './app/routes/borrow.routes';


const app: Application = express();

app.use(express.json());

app.use('/api/books', booksRouter);
app.use('/api/borrow', borrowRouter)

app.get('/', (req: Request, res: Response) => {
    res.send('Library management application working perfectly.')
})

app.use((error: any, req: Request, res: Response, next: NextFunction) => {
    let errorCode = error.statusCode | 400;
    if (error) {
        res.status(errorCode).send({
            message: error.message,
            success: false,
            error: error
        })
    }
})

export default app