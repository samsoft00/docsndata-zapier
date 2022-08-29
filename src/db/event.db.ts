import {modelDb} from './model.db';
import randomstr from 'randomstring'

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
        id: randomstr.generate(12),
        modelId: modelDb[0].id, 
        name: `New ${modelDb[0].name}`,
        description: 'Triggers when a new record is created. Optionally: triggers when any record (new or existing) is first added.'         
    },
    { 
        id: randomstr.generate(12), 
        modelId: modelDb[0].id,
        name: `New or Updated ${modelDb[0].name}`,
        description: 'Trigger when a new record is created or an existing record is updated.'        
    },
]