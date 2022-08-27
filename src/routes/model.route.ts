import { Request, Response, Router } from 'express';
import {pick} from 'lodash';
import hatId from 'hat'

import { modelDb, modelSchemas, modelData } from '../db/model.db';
import dayjs from 'dayjs';
import { eventDb } from '../db/event.db';

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
    
    return res.status(200).json({
        data: modelDb[modelDb.length - 1],
        statusCode: 200,
        message: 'Model created'
    });
});

// return all models
router.get('/', (req: Request, res: Response) => {
    const models = modelDb.filter(m => m.teamId === req.user.teamId)

    return res.status(200).json({
        data: models,
        statusCode: 200,
        message: 'Models retrieved'
    });    
})

// return schema of a model
router.get('/:modelId/schema', (req: Request, res: Response) => {
    const schemas = modelSchemas.filter(m => m.modelId === req.params.modelId)

    return res.status(200).json({
        data: schemas,
        statusCode: 200,
        message: 'Models schema retrieved'
    });      
})

// return model data ~ where modellID = ? and eventID = ?
// https://docsndata-zapier.herokuapp.com/api/v1/model/:project_id/event/:event_id/record
router.get('/:modelId/event/:eventId/records', (req: Request, res: Response) => {
    console.log(req.params)
    const { modelId, eventId } = req.params;
    const { teamId } = req.user

    const payload = modelData.filter(m => m.model_id === modelId)
    
    console.log(payload)

    return res.status(200).json({
        data: payload,
        statusCode: 200,
        message: 'Models data retrieved'
    });
})

// Create or Update model record
router.put('/:modelId/record', (req: Request, res: Response) => {
    const { modelId } = req.params;

    // Check if model exist
    const modelExist = modelDb.filter(m => m.id === modelId)[0];
    if (!modelExist) {
        return res.status(400).json({ 
            message: 'Select project/model does not exist'
        })
    }

    const {id, ...data } = req.body;
    if (typeof id === 'undefined') {
        return res.status(400).json({ message: 'Id is required' })
    }

    // find record by ID
    const existRecord = modelData.filter(m => m.id === id)[0]
    if (existRecord) {
        // update record
        const payload = {
            ...existRecord,
            ...data,
            updated_date: dayjs().toDate()
        }
        modelData.splice(modelData.indexOf(existRecord), 1, payload)
    } else {
        // create record
        const payload = {
            id: hatId(),
            model_id: modelId,
            ...data,
            created_date: dayjs().toDate(),
            updated_date: dayjs().toDate()
        }
        modelData.push(payload)
    }

    return res.status(200).json({
        data: {},
        statusCode: 200,
        message: 'Created successful'
    })
})

// return all events under model
// -> modelID
router.get('/:modelId/events', (req: Request, res: Response) => {
    const { modelId } = req.params;
    const events = eventDb.filter(e => e.modelId === modelId);
    
    console.log(modelId, events)

    return res.status(200).json({
        data: events,
        statusCode: 200,
        message: 'Events retrieved'
    })
})

export default router;