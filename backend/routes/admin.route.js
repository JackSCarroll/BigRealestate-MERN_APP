import express from "express";
import { getAllUsers, getAllAgents, getAllPosts } from "../controllers/admin.controller.js";
import { verifyToken } from "../middleware/verifyToken.js";
import { verifyRole } from "../middleware/verifyRole.js";

const router = express.Router();

// Route to get all users
router.get("/users", verifyToken, verifyRole("admin"), getAllUsers);
// Route to get all agents
router.get("/agents", verifyToken, verifyRole("admin"), getAllAgents);
// Route to get all listings
router.get("/posts", verifyToken, verifyRole("admin"), getAllPosts);

export default router;