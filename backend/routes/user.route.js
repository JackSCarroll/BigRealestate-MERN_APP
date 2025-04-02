import express from 'express';
import { getUsers, getUser, updateUser, deleteUser, profilePosts, savePost } from '../controllers/user.controller.js';
import { verifyToken } from '../middleware/verifyToken.js';

const router = express.Router();

router.get('/', getUsers);
//router.get('/:id', verifyToken, getUser);
router.put("/:id", verifyToken, updateUser);
router.delete("/:id", verifyToken, deleteUser);
router.get("/profilePosts", verifyToken, profilePosts)
router.post("/save", verifyToken, savePost);

export default router;