import { Request, Response, Router } from 'express';
import {pick} from 'lodash';
import hatId from 'hat'

import { modelDb, modelSchemas, modelData } from '../db/model.db';
import dayjs from 'dayjs';

const router = Router();

// Create sample model
router.post('/', (req: Request, res: Response) => {
    const model = pick(req.body, ['name', 'description']);

    const checkIfModelExist = modelDb.filter(m => m.name.toLowerCase() === model.name.toLowerCase())
    if (checkIfModelExist.length > 0) {
        return res.status(400).json({
            message: `Model with name ${model.name} already exist`
        })
    }

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

// return all models
router.get('/', (req: Request, res: Response) => {
    const models = modelDb.filter(m => m.teamId === req.user.teamId)

    return res.status(201).json({
        data: models,
        statusCode: 201,
        message: 'Models retrieved'
    });    
})

// return schema of a model
router.get('/:modelID/schema', (req: Request, res: Response) => {
    const schemas = modelSchemas.filter(m => m.modelId === req.params.modelID)

    return res.status(201).json({
        data: schemas,
        statusCode: 201,
        message: 'Models schema retrieved'
    });      
})

router.get('/:modelID/data', (req: Request, res: Response) => {
    const payload = modelData.filter(m => m.model_id === req.params.modelID)

    return res.status(201).json({
        data: payload,
        statusCode: 201,
        message: 'Models data retrieved'
    });
})

export default router;