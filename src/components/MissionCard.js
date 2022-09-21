import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MissionsCard extends Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div data-testid="mission-card">
        <p key={ name } data-testid="mission-name">{name}</p>
        <p key={ year } data-testid="mission-year">{year}</p>
        <p key={ country } data-testid="mission-country">{country}</p>
        <p key={ destination } data-testid="mission-destination">{destination}</p>
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
