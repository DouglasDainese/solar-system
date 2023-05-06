import React, { Component } from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionsCard from './MissionCard';
import '../App.css';

class Missions extends Component {
  render() {
    return (
      <div className="MissõesConteiner" data-testid="missions">
        <Title headline="Missões" />
        <ul className="MissõesList">
          {missions.map((missão) => (
            <MissionsCard
              key={ missão.name }
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
