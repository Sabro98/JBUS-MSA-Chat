import * as express from 'express';
import * as morgan from 'morgan';
import chatRouter from './routers/chatRouter';

const app = express();
const logger = morgan('dev');

app.use(logger);
app.use(express.urlencoded({ extended: true }));

app.use('/chat', chatRouter);

app.use('/', (req: express.Request, res: express.Response) =>
  res.send('Root url -- JBUS-Chat-Service')
);

export default app;
