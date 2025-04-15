import prisma from "../lib/prisma.js";
import bcrypt from "bcrypt";
import fs from "fs";
import path from "path";

export const getUsers = async (req, res) => {
    try {
        const users = await prisma.user.findMany();
        res.status(200).json(users);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Failed to get users" });
    }
}
export const getUser = async (req, res) => {
    const id = req.params.id;
    try {
        const user = await prisma.user.findUnique({
            where: { id }
        });
        res.status(200).json(user);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Failed to get user" });
    }
}
export const getUserAvatar = async (req, res) => {
    const id = req.params.id;
    try {
        const user = await prisma.user.findUnique({
            where: { id }
        });

        // Check if user has avatar
        if (!user.avatar) {
            return res.status(404).json({ message: "Avatar not found" });
        }

        // Check if avatar file exists
        const avatarPath = path.join(__dirname, `../../uploads/${id}/${user.avatar}`);
        if (!fs.existsSync(avatarPath)) {
            return res.status(404).json({ message: "Avatar not found" });
        }

        // Construct the full URL
        const avatarUrl = `${req.protocol}://${req.get('host')}/uploads/${id}/${user.avatar}`;
        res.status(200).json({ avatar: avatarUrl });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Failed to get avatar" });
    }
}
export const updateUser = async (req, res) => {
    const id = req.params.id;
    const tokenUserId = req.userId;
    const {oldPassword, newPassword, confirmPassword, avatar, ...inputs} = req.body;
    const updatingPassword = oldPassword && newPassword && confirmPassword;

    if (id !== tokenUserId) {
        return res.status(403).json({ message: "You are not authorized to update this user" });
    }

    let updatedPassword = null;
    try {
        // Check if user exists
        const user = await prisma.user.findUnique({
            where: { id }
        });

        if(updatingPassword){
            const isPasswordValid = await bcrypt.compare(oldPassword, user.password);
            if(isPasswordValid && newPassword === confirmPassword) {
                updatedPassword = await bcrypt.hash(newPassword, 10);
                const updatedUser = await prisma.user.update({
                    where: { id },
                    data: {
                        ...inputs,
                        ...(updatedPassword && {password: updatedPassword}),
                        ...(avatar && {avatar}),
                    },
                });
                const {password:userPassword, ...userInfo} = updatedUser;
                res.status(200).json(userInfo);
            }else {
                res.status(400).json({ message: "Invalid password or new password and confirm password do not match" });
            }
        } else {
            const updatedUser = await prisma.user.update({
                where: { id },
                data: {
                    ...inputs,
                    ...(avatar && {avatar}),
                },
            });
            const {password:userPassword, ...userInfo} = updatedUser;
            res.status(200).json(userInfo);
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Failed to update user" });
    }
}

export const makeUserAgent = async (req, res) => {
    const id = req.params.id;
    const tokenUserRole = req.role;
    if (tokenUserRole !== "admin") {
        return res.status(403).json({ message: "You are not authorized to update this user" });
    }
    try {
        const user = await prisma.user.findUnique({
            where: { id }
        });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        if (user.role === "agent") {
            return res.status(400).json({ message: "User is already an agent" });
        }
        const updatedUser = await prisma.user.update({
            where: { id },
            data: {
                role: "agent",
            },
        });
        const { password: userPassword, ...userInfo } = updatedUser;
        if(updatedUser.role === "agent") {
            const existingAgent = await prisma.agent.findUnique({
                where: { userId: id }
            });
            if (!existingAgent) {
                // Create a new agent
                await prisma.agent.create({
                    data: {
                        userId: id,
                    },
                });
                const { id: userAgentId } = userAgent;
                res.status(200).json({ ...userInfo, userAgentId });
            } else {
                // Agent already exists
                res.status(400).json({ message: "Agent with this userId already exists" });
            }
        } else {
            throw new Error("Failed to create agent");
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Failed to update user" });
    }
}
export const deleteUser = async (req, res) => {
    const id = req.params.id;
    const tokenUserId = req.userId;

    if (id !== tokenUserId) {
        return res.status(403).json({ message: "You are not authorized to update this user" });
    }
    try {
        await prisma.user.delete({
            where: { id }
        });
        res.status(200).json({ message: "User deleted successfully!" });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Failed to delete user" });
    }
}
export const profilePosts = async (req, res) => {
    const tokenUserId = req.userId;
    try {
        const userPosts = await prisma.post.findMany({
            where: { userId: tokenUserId },
            include: {
                savedPosts: {
                    where: { userId: tokenUserId },
                    select: { id: true },
                },
            },
        });
        const saved = await prisma.savedPost.findMany({
            where: { userId: tokenUserId },
            include: {
                post: true,
            },
        });
        const userPostsWithSavedStatus = userPosts.map(post => ({
            ...post,
            isSaved: post.savedPosts.length > 0,
        }));
        const savedPostsWithSavedStatus = saved.map(savedPost => ({
            ...savedPost.post,
            isSaved: true,
        }));
        res.status(200).json({userPosts: userPostsWithSavedStatus, savedPosts: savedPostsWithSavedStatus});
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Failed to get profile posts!" });
    }
}
export const savePost = async (req, res) => {
    const postId = req.body.postId;
    const tokenUserId = req.userId;
  
    try {
      const savedPost = await prisma.savedPost.findUnique({
        where: {
          userId_postId: {
            userId: tokenUserId,
            postId: postId,
          },
        },
      });
  
      if (savedPost) {
        await prisma.savedPost.delete({
          where: {
            id: savedPost.id,
          },
        });
        res.status(200).json({ message: "Post removed from saved list" });
      } else {
        await prisma.savedPost.create({
          data: {
            userId: tokenUserId,
            postId: postId,
          },
        });
        res.status(200).json({ message: "Post saved" });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Failed to save post!" });
    }
};
  