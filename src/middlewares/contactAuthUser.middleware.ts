import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken"

export const contactAuthUserMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const headerTokenData = req.headers.authorization

    if (!headerTokenData) {
        return res.status(401).json({ message: "Invalid token" })
    }

    const [_, token] = headerTokenData.split(" ")

    verify(token, process.env.SECRET_KEY!, (error: any, decoded: any) => {
        if (error) {
            return res.status(401).json({
                message: "Invalid token"
            })
        }
        res.locals.userId = decoded.sub
        return next()
    })
}