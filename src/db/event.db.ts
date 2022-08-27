import {modelDb} from './model.db';
import hat from 'hat';

// list of events
interface EventLists {}

interface DnDModelEvent {
    id: string;
    modelId: string;
    name: string;
    description?: string;
}

export const eventDb: DnDModelEvent[] = [
    { 
        id: hat(), 
        modelId: modelDb[0].id, 
        name: `New ${modelDb[0].name}`,
        description: 'Triggers when a new record is created. Optionally: triggers when any record (new or existing) is first added.'         
    },
    { 
        id: hat(), 
        modelId: modelDb[0].id,
        name: `New or Updated ${modelDb[0].name}`,
        description: 'Trigger when a new record is created or an existing record is updated.'        
    },
]