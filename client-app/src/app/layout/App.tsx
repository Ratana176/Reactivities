import React, { Component } from 'react';
import axios from 'axios';
import { Header, Icon, List } from 'semantic-ui-react'
import { IActivity } from '../models/activity';

interface IState {
  activities: IActivity[]
}

class App extends Component<{}, IState> {
  readonly state: IState = {
    activities: []
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/activities').then((response) => {
      this.setState({
        activities: response.data
      });
    }).catch(error => console.log(error));
  }
  render() {
    return (
      <div className="App">
        <Header as='h2'>
          <Icon name='plug' />
          <Header.Content>Reactivities</Header.Content>
        </Header>
        <List>
          {this.state.activities.map((activity: any) => (
            <List.Item key={activity.id}>{activity.title}</List.Item>
          ))}
        </List>
      </div>
    );
  }
}

export default App;
