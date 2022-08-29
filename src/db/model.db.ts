import dayjs from 'dayjs';
import {teams} from './user.db';
import randomStr from 'randomstring'

const modelID = '83hUTiW7tRwF';

interface DnDModel {
    id: string;
    teamId: string;
    name: string;
    description?: string;
    created_date: Date;
    updated_date: Date;
}

type FieldType = string | number | boolean | Date | undefined;
interface DnDModelSchema {
    modelId: string;
    key: string;
    label: string;
    type?: FieldType;
    required?: boolean;
}

interface DnDModelData {
    id: string|number;
    model_id: string;
    [key: string]:any
}

export const modelDb: DnDModel[] = [
    {
        id: modelID, 
        name: 'Customer',
        teamId: teams[0].id,
        description: 'A simple model for customers',
        created_date: dayjs().toDate(),
        updated_date: dayjs().toDate()        
    },
    { 
        id: randomStr.generate(12), 
        name: 'Student',
        teamId: teams[0].id,
        description: 'A simple model for students',
        created_date: dayjs().toDate(),
        updated_date: dayjs().toDate()
    }    
];

export const modelSchemas: DnDModelSchema[] = [
    { modelId: modelID, key: 'id', label: 'User ID' },
    { modelId: modelID, key: 'first_name', label: 'First Name', type: 'string', required: true },
    { modelId: modelID, key: 'last_name', label: 'Last Name', type: 'string', required: true },
    { modelId: modelID, key: 'number', label: 'Phone number', type: 'string', required: true },
    { modelId: modelID, key: 'email', label: 'Email address', type: 'string', required: true },
    { modelId: modelID, key: 'gender', label: 'Gender', type: 'string' },
    { modelId: modelID, key: 'address', label: 'Address', type: 'string' },
    { modelId: modelID, key: 'city', label: 'City', type: 'string', required: true },
    { modelId: modelID, key: 'country', label: 'Country', type: 'string', required: true  },
    { modelId: modelID, key: 'created_at', label: 'Created Date', type: 'string', required: true },
    { modelId: modelID, key: 'updated_at', label: 'Updated Date', type: 'string' },
    { 
        modelId: 'AfYDEIpVGFRE', 
        key: 'first_name', 
        label: 'First Name', 
        type: 'string', 
        required: true 
    },
]

export const modelData: DnDModelData[] = [
    {
        id: 1,
        model_id: modelID,
        last_name: 'Wang',
        first_name: 'Hammond',
        phone_number: "(792) 584-2277",
        email: "dolor.fusce@yahoo.com",
        address: "721-3734 Tempor, Rd.",
        city: "Sydney",
        country: "Indonesia",
        gender: 'Male',
        created: '2014-12-09T13:50:51.644000Z',
        edited: '2014-12-10T13:52:43.172000Z',
    },
    {
        id: 2,
        model_id: modelID,
        email: 'carma@cox.net',
        last_name: 'Carma',
        first_name: 'Vanheusen',
        phone_number: '5105037169',
        address: '68556 Central Hwy, San Leandro',
        city: 'Alameda',
        state: 'CA',
        gender: 'Female',
        created: '2014-12-09T13:50:51.644000Z',
        edited: '2014-12-10T13:52:43.172000Z',
    },
    {
        id: 3,
        model_id: modelID,
        email: 'vinouye@aol.com',
        last_name: 'Veronika',
        first_name: 'Inouye',
        phone_number: '4085401785',
        address: '6 Greenleaf Ave,San Jose',
        city: 'Santa Clara',
        state: 'CA',
        gender: 'Male',
        created: '2014-12-09T13:50:51.644000Z',
        edited: '2014-12-10T13:52:43.172000Z',
    },
    {
        id: 4,
        model_id: modelID,
        email: 'ezekiel@chui.com',
        last_name: 'Ezekiel',
        first_name: 'Chui',
        phone_number: '4106691642',
        address: '2 Cedar Ave #84,Easton',
        city: 'Talbot',
        state: 'MD',
        gender: 'Male',
        created: '2014-12-09T13:50:51.644000Z',
        edited: '2014-12-10T13:52:43.172000Z',        
    },
    {
        id: 5,
        model_id: modelID,
        email: 'amaclead@gmail.com',
        last_name: 'Abel',
        first_name: 'Maclead',
        phone_number: '6313353414',
        address: '37275 St  Rt 17m M, Middle Island',
        city: 'Suffolk',
        state: 'NY',
        gender: 'Male',
        created: '2014-12-09T13:50:51.644000Z',
        edited: '2014-12-10T13:52:43.172000Z',        
    }     
]
