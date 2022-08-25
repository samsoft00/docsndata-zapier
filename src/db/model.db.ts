import dayjs from 'dayjs';
import {teams} from './user.db';

interface DnDModel {
    id: string;
    teamId: string;
    name: string;
    description?: string;
    created_date: Date;
    updated_date: Date;
}

interface DnDModelProperty {}

interface DnDModelPropertySchema {}

export const modelDb: DnDModel[] = [
    { 
        id: '0c82a54f22f775a3ed8b97b2dea74036', 
        name: 'Student',
        teamId: teams[0].id,
        description: 'A simple model for students',
        created_date: dayjs().toDate(),
        updated_date: dayjs().toDate()
    },
];