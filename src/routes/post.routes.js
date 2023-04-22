import postController from "../controllers/post.controller";

import { Router } from 'express';

const router = Router();

router.post('/create', postController.createPost);
router.get('/', postController.getAllPosts);

export default router;