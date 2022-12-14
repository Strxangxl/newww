import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

const protect = async (req, res) => {
    let token;

    if(req.headers.authorization){
        try {
            token = req.he.authorization.split("")[1]
            const decoded = jwt.verify(token, process.env.JWT_SECRET)

            req.user = await User.findById(decoded.id).select("-password")

            next()
        } catch (error) {
            console.log(error)
            res.status(401)
            throw new Error("Not authorized, token failed")
        }
    }

    if(!token){
        res.status(401)
        throw new Error("Not authorized, token failed")
    }
}

export default protect;