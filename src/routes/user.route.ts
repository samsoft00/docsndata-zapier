import { Request, Response, Router } from 'express';

const router = Router();

// Return user payload
router.get('/', (req: Request, res: Response) => {
    return res.status(201).json({
        data: req.user,
        statusCode: 201,
        message: 'User retrieved'
    });    
})

export default router;