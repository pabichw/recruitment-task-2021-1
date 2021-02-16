import React from 'react';
import PropTypes from 'prop-types';

const Album = ({ data, onStarPress, onDeletePress }) => (
  <div className="card">
    <div className="card-image">
      <img alt="album-cover" src="assets/images/album-placeholder.jpg" />
    </div>
    <div className="card-content">
      <p className="card-content__card-text">{data.name}</p>
    </div>
    <div className="card-action">
      <button type="button" onClick={onDeletePress} className="btn-floating btn-small waves-effect waves-light red">
        <i className="material-icons">delete</i>
      </button>
      <button type="button" onClick={onStarPress} className={`right btn-floating btn-small waves-effect waves-light ${data.isTheBestOf ? 'teal' : 'grey'}`}>
        <i className="material-icons">star</i>
      </button>
    </div>
  </div>
);

Album.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    isTheBestOf: PropTypes.bool,
  }).isRequired,
  onStarPress: PropTypes.func.isRequired,
  onDeletePress: PropTypes.func.isRequired,
};

export default Album;
