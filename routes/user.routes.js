import { Router } from 'express';

import authorize from '../middlewares/auth.middleware.js';

import { createUser, getUser, getUsers } from '../controllers/user.controller.js';

const userRouter = Router();

userRouter.get('/', getUsers);

userRouter.get('/:id', authorize, getUser);

userRouter.post('/', createUser);

userRouter.put('/:id', authorize, (req, res) => res.send({ title: 'UPDATE user' }));

userRouter.delete('/:id', authorize, (req, res) => res.send({ title: 'DELETE user' }));

export default userRouter;