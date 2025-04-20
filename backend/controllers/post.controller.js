import prisma from "../lib/prisma.js";
import jwt from "jsonwebtoken";

export const getPosts = async (req, res) => {
    const query = req.query;
    try{
        const posts = await prisma.post.findMany({
            where: {
                city: query.city || undefined,
                type: query.type || undefined,
                property: query.property || undefined,
                price: {
                    gte: parseInt(query.minPrice) || undefined,
                    lte: parseInt(query.maxPrice)|| undefined,
                },
                bedroom: parseInt(query.bedroom) || undefined,
        }
        });
        const token = req.cookies?.token;
        if(token){
            jwt.verify(token, process.env.JWT_SECRET_KEY, async (err, decoded) => {
                if(!err) {
                    const savedPosts = await prisma.savedPost.findMany({
                        where: { userId: decoded.id },
                        select: { postId: true },
                    });
                    const savedPostIds = savedPosts.map((post) => post.postId);
                    const postsWithSavedStatus = posts.map((post) => ({
                        ...post, isSaved: savedPostIds.includes(post.id)
                    }));
                    res.status(200).json(postsWithSavedStatus);
                } else {
                    const postsWithSavedStatus = posts.map((post) => ({
                        ...post, isSaved: false
                    }));
                    res.status(200).json(postsWithSavedStatus);
                }
            });
        } else {
            const postsWithSavedStatus = posts.map((post) => ({
                ...post, isSaved: false
            }));
            res.status(200).json(postsWithSavedStatus);
        }
    } catch(err) {
        console.log(err);
        res.status(500).json({message: "Failed to get posts"});
    }
}
export const getPost = async (req, res) => {
    const id = req.params.id;
    try{
        const post = await prisma.post.findUnique({
            where: { id },
            include: {
                postDetail: true,
                agent: {
                    select: {
                        user: {
                            select: {
                                username: true,
                                avatar: true,
                            }
                        },
                    }
                }
            }
        });

        const token = req.cookies?.token;
        if(token){
            jwt.verify(token, process.env.JWT_SECRET_KEY, async (err, decoded) => {
                if(!err) {
                    const saved = await prisma.savedPost.findUnique({
                        where: {
                            userId_postId: {
                                postId: id,
                                userId: decoded.id
                            },
                        },
                    });
                    res.status(200).json({...post, isSaved: saved ? true : false});
                } else {
                    res.status(200).json({ ...post, isSaved: false });
                }
            });
        }
    } catch(err) {
        console.log(err);
        res.status(500).json({message: "Failed to get post"});
    }
}
export const addPost = async (req, res) => {
    const body = req.body;
    const tokenUserId = req.userId
    try{
        const agent = await prisma.agent.findUnique({
            where: {
                userId: tokenUserId
            }, select: {
                id: true,
                userId: true,
            }
        });
        if(!agent) {
            return res.status(403).json({message: "You are not authorized to add post"});
        }
        const newPost = await prisma.post.create({
            data: {
                ...body.postData,
                agent: {
                    connect: {
                        id: agent.id
                    }
                },
                postDetail: {
                    create: body.postDetail
                }
            }
        })
        res.status(200).json(newPost)
    } catch(err) {
        console.log(err);
        res.status(500).json({message: "Failed to add post"});
    }
}
export const updatePost = async (req, res) => {
    try{
        // TODO: Implement update post
        res.status(200).json()
    } catch(err) {
        console.log(err);
        res.status(500).json({message: "Failed to update post"});
    }
}
export const deletePost = async (req, res) => {
    const postId = req.params.id;
    const tokenUserId = req.userId;
    try{
        const agent = await prisma.agent.findUnique({
            where: {
                userId: tokenUserId
            }, select: {
                id: true,
                userId: true,
            }
        });
        if(!agent) {
            return res.status(403).json({message: "You are not authorized to delete post"});
        }

        const post = await prisma.post.findUnique({
            where: {
                id: postId
            }
        });
        if(post.agentId !== agent.id) {
            return res.status(403).json({message: "You are not authorized to delete this post"});
        } else {
            await prisma.postDetail.delete({
                where: {
                    postId: postId
                }
            });
            await prisma.post.delete({
                where: {
                    id: postId
                }
            });
        }
        res.status(201).json({message: "Post deleted successfully"});
    } catch(err) {
        console.log(err);
        res.status(500).json({message: "Failed to delete post"});
    }
}