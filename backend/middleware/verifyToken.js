import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) return res.status(401).send("Access Denied");

  jwt.verify(token, process.env.JWT_SECRET_KEY, async (err, payload) => {
    if(err) return res.status(403).json({message: "Invalid token!"});
    req.userId = payload.id;
    req.role = payload.role;
    next();
});

}