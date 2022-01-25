import React from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <div className="box-planet-card" data-testid="planet-card">
        <img className="planImage" src={ planetImage } alt={ `Planeta ${planetName}` } />
        <p data-testid="planet-name" className="planetName">{planetName}</p>
      </div>
    );
  }
}
PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default PlanetCard;
