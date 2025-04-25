import prisma from "../lib/prisma.js";

export const getAllUsers = async (req, res) => {
    try {
        const users = await prisma.user.findMany();
        res.status(200).json(users);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Failed to fetch users" });
    }
}
export const getAllAgents = async (req, res) => {
    try {
        const agents = await prisma.user.findMany({
            where: {
                role: "agent"
            }
        });
        res.status(200).json(agents);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Failed to fetch agents" });
    }
}
export const getAllPosts = async (req, res) => {
    try {
        const listings = await prisma.post.findMany();
        res.status(200).json(listings);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Failed to fetch posts" });
    }
}