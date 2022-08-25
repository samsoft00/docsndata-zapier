import { Request, Response, Router } from 'express';
// import {pick} from 'lodash';
// import hatId from 'hat'

import { eventDb } from '../db/event.db';

const router = Router();

// Get all events
router.get('/', (req: Request, res: Response) => {
    return res.status(200).json({
        data: eventDb,
        statusCode: 201,
        message: 'All models events retrieved'        
    })
})

router.get('/:modelID', (req: Request, res: Response) => {
    return res.status(200).json({
        data: eventDb,
        statusCode: 201,
        message: 'Models retrieved'        
    })
})

export default router;