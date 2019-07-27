import express from 'express';
import cors from 'cors';
import { prodRouter as productRouter } from './routes/products';
import { categRouter as categoryRouter } from './routes/categories';
import { logMiddleware } from './middleware/log';
import { logErrors, clientErrorHandler, errorHandler, idErrorHandler, nameErrorHandler } from './middleware/error';
import path from 'path';
import { initConfig } from './utils/config';


initConfig(); // setting enviroment variables.

const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(logMiddleware);
app.use('/public',express.static(path.join(__dirname,'static')));
app.use('/api/categories', categoryRouter);
app.use('/api/products', productRouter);
//error middlewares
app.use(idErrorHandler);
app.use(nameErrorHandler);
app.use(logErrors);
app.use(clientErrorHandler);
app.use(errorHandler);

export { app };
