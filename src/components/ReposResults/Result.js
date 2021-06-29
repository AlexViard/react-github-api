import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Result = ({
  nameProject, nameOwner, description, url, urlImg,
}) => (
  <div className="card" href={url}>
    <img className="card__img" src={urlImg} alt="Avatar" />
    <div className="card__container__text">
      <h4 className="card__title">{nameProject}</h4>
      <p className="card__owner">{nameOwner}</p>
      <p className="card__description">{description}</p>
    </div>
  </div>
);

Result.propTypes = {
  nameProject: PropTypes.string,
  nameOwner: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
  urlImg: PropTypes.string,
};

Result.defaultProps = {
  nameProject: 'Pas defini',
  nameOwner: 'Pas defini',
  description: 'Pas defini',
  url: '',
  urlImg: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Pas_d%27image_disponible.svg/1200px-Pas_d%27image_disponible.svg.png',
};

export default Result;
