import express, { NextFunction, Request, Response } from "express";

const router = express.Router();

router.get("/product", async (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({});
});

export default router;
