import React, { Component } from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionsCard from './MissionCard';

class Missions extends Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        <ul>
          {missions.map((missão) => (
            <MissionsCard
              key={ missions.name }
              name={ missão.name }
              year={ missão.year }
              country={ missão.country }
              destination={ missão.destination }
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default Missions;
