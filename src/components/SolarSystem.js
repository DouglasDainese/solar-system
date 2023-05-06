import React, { Component } from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';
import '../App.css';

class SolarSystem extends Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <ul className="planetas">
          {planets.map((planeta) => (
            <PlanetCard
              key={ planeta.name }
              planetImage={ planeta.image }
              planetName={ planeta.name }
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default SolarSystem;
