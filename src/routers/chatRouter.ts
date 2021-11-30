import * as express from 'express';
import { getChat, getSearch, postChat } from '../controllers/chatController';
const userRouter: express.Router = express.Router();

userRouter.route('/save').get(getChat).post(postChat);
userRouter.route('/search/:id').get(getSearch);

export default userRouter;
