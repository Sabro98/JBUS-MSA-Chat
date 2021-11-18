import * as express from 'express';
import { getChat, postChat } from '../controllers/chatController';
const userRouter: express.Router = express.Router();

userRouter.route('/').get(getChat).post(postChat);

export default userRouter;
