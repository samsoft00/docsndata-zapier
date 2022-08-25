import { Request, Response, Router } from 'express';
import {pick} from 'lodash';
import hatId from 'hat'

import { modelDb } from '../db/model.db';
import dayjs from 'dayjs';

const router = Router();

// Create sample model
router.post('/', (req: Request, res: Response) => {
    const model = pick(req.body, ['name', 'description']);

    const payload = {
        id: hatId(),
        teamId: req.user.teamId,
        ...model,
        created_date: dayjs().toDate(),
        updated_date: dayjs().toDate()        
    };
    modelDb.push(payload)
    
    return res.status(201).json({
        data: modelDb[modelDb.length - 1],
        statusCode: 201,
        message: 'Model created'
    });
});

router.get('/', (req: Request, res: Response) => {
    return res.status(201).json({
        data: modelDb,
        statusCode: 201,
        message: 'Models retrieved'
    });    
})

export default router;