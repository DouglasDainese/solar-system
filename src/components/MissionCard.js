import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../App.css';

class MissionsCard extends Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div className="MissõesCard" data-testid="mission-card">
        <h5 key={ name } data-testid="mission-name">{name}</h5>
        <div className="inforMissões">
          <p key={ year } data-testid="mission-year">{year}</p>
          <p key={ country } data-testid="mission-country">{country}</p>
          <div>
            {/* <img className="Ico1" src="https://cdn.pixabay.com/photo/2014/04/03/00/36/pin-308802_960_720.png" alt="iconDestino" /> */}
            <p key={ destination } data-testid="mission-destination">{destination}</p>
          </div>
        </div>
      </div>
    );
  }
}

MissionsCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default MissionsCard;
