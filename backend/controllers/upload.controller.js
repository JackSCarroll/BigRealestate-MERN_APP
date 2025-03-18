export const uploadSingle = async (req, res) => {
    const { id } = req.params;
    const file = req.file;
    try {
        if (!file) {
            return res.status(400).json({ message: "Error: Please upload an image file!" });
        }
        const avatarUrl = `${req.protocol}://${req.get("host")}/uploads/${id}/${file.filename}`;
        res.status(201).json({ message: "File uploaded successfully!",
            file: avatarUrl
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Failed to upload file" });
    }
}