import express from "express";
import { uploadMultiple, uploadSingle } from "../controllers/upload.controller.js";
import fs from "fs";
import multer from "multer";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        let dir = "";
        if (file.fieldname === "avatar") {
            dir = `./uploads/${req.params.id}/avatars`;
        } else if (file.fieldname === "postImages") {
            dir = `./uploads/${req.params.id}/posts`;
        }
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
router.post("/uploadMultiple/:id", upload.array('postImages', 10), uploadMultiple);

export default router;