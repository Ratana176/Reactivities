import React, {useState, FormEvent} from 'react'
import { Segment, Form, Button } from 'semantic-ui-react'
import { IActivity } from '../../../app/models/activity'

interface IProps {
    setEditMode: (editMode: boolean) => void;
    activity: IActivity;
    createActivity: (activity: IActivity) => void;
    editActivity: (activity: IActivity) => void;
}

export const ActivityForm: React.FC<IProps> = ({
    setEditMode, 
    activity: initializeFormState,
    createActivity,
    editActivity
}) => {
    const initializeForm = () => {
        if (initializeFormState){
            return initializeFormState;
        }
        return {
            id: '',
            title: '',
            category: '',
            description: '',
            date: '',
            city: '',
            venue: ''
        }
    };
    const [activity, setActivity] = useState<IActivity>(initializeForm);

    const handleInputChange = (event: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = event.currentTarget;
        setActivity({...activity, [name]: value});
    };

    const handleFormSubmit = () => {
        
    };

    return (
        <Segment clearing>
            <Form onSubmit={handleFormSubmit}>
                <Form.Input 
                    onChange={handleInputChange} 
                    name='title' 
                    placeholder='Titile' 
                    value={activity.title} />
                <Form.TextArea 
                    onChange={handleInputChange} 
                    name='description' 
                    rows={2} 
                    placeholder='Description' 
                    value={activity.description} />
                <Form.Input 
                    onChange={handleInputChange} 
                    name='category' 
                    placeholder='Category' 
                    value={activity.category} />
                <Form.Input 
                    onChange={handleInputChange} 
                    name='date' 
                    type='date' 
                    placeholder='Date' 
                    value={activity.date} />
                <Form.Input 
                    onChange={handleInputChange} 
                    name='city' 
                    placeholder='City' 
                    value={activity.city}/>
                <Form.Input 
                    onChange={handleInputChange} 
                    name='venue' 
                    placeholder='Venue' 
                    value={activity.venue} />
                <Button floated='right' positive type='submit' content='Submit'/>
                <Button onClick={() => setEditMode(false)} floated='right' type='submit' content='Cancel'/>
            </Form>
        </Segment>
    )
}
