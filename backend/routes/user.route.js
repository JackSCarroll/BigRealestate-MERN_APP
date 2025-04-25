import express from 'express';
import { getUsers, getUser, updateUser, makeUserAgent, updateUserRole, deleteUser, profilePosts, savePost } from '../controllers/user.controller.js';
import { verifyToken } from '../middleware/verifyToken.js';
import { verifyRole } from '../middleware/verifyRole.js';

const router = express.Router();

router.get('/', getUsers);
//router.get('/:id', verifyToken, getUser);
router.put("/:id", verifyToken, updateUser);
router.put("/role/:id", verifyToken, verifyRole("admin"), updateUserRole);
router.put("/agent/:id", verifyToken, verifyRole("admin"), makeUserAgent);
router.delete("/:id", verifyToken, deleteUser);
router.get("/profilePosts", verifyToken, profilePosts)
router.post("/save", verifyToken, savePost);

export default router;