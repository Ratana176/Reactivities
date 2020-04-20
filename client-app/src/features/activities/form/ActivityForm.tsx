import React, {useState} from 'react'
import { Segment, Form, Button } from 'semantic-ui-react'
import { IActivity } from '../../../app/models/activity'

interface IProps {
    setEditMode: (editMode: boolean) => void;
    activity: IActivity;
}

export const ActivityForm: React.FC<IProps> = ({setEditMode, activity: initializeFormState}) => {
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
    return (
        <Segment clearing>
            <Form>
                <Form.Input placeholder='Titile' value={activity.title} />
                <Form.TextArea rows={2} placeholder='Description' value={activity.description} />
                <Form.Input placeholder='Category' />
                <Form.Input type='date' placeholder='Date' />
                <Form.Input placeholder='City' />
                <Form.Input placeholder='Venue' />
                <Button floated='right' positive type='submit' content='Submit'/>
                <Button onClick={() => setEditMode(false)} floated='right' type='submit' content='Cancel'/>
            </Form>
        </Segment>
    )
}
