import express from "express";
import { uploadSingle } from "../controllers/upload.controller.js";
import fs from "fs";
import multer from "multer";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const dir = `./uploads/${req.params.id}`;
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, {
                recursive: true
            });
        }
        cb(null, dir);
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + "-" + file.originalname);
    },
});
const upload = multer({ storage });

const router = express.Router();

router.post("/uploadSingle/:id", upload.single('avatar'), uploadSingle);

export default router;