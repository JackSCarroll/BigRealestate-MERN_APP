export const uploadSingle = async (req, res) => {
    const { id } = req.params;
    const file = req.file;
    try {
        if (!file) {
            return res.status(400).json({ message: "Error: Please upload an image file!" });
        }
        const avatarUrl = `${req.protocol}://${req.get("host")}/uploads/${id}/avatars/${file.filename}`;
        res.status(201).json({ message: "File uploaded successfully!",
            file: avatarUrl
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Failed to upload file" });
    }
}

export const uploadMultiple = async (req, res) => {
    const { id } = req.params;
    const files = req.files;
    try {
        if (!files) {
            return res.status(400).json({ message: "Error: Please upload image files!" });
        }
        const fileUrls = files.map(file => `${req.protocol}://${req.get("host")}/uploads/${id}/posts/${file.filename}`);
        res.status(201).json({
            message: "Files uploaded successfully!",
            files: fileUrls
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Failed to upload files" });
    }
}