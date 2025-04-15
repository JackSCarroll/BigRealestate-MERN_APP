export const verifyRole = (requiredRole) => {
    return (req, res, next) => {
        if(req.role !== requiredRole) {
            return res.status(403).json({ message: "You do not have permission to access this resource" });
        }
        next();
    };
}