import React from 'react';
import PropTypes from 'prop-types';
import Result from './Result';

import './style.scss';

const ReposResults = ({ itemsGithub, handleClick }) => (
  <>
    <div className="repos-result">
      {itemsGithub.map((elem) => (
        <Result
          key={elem.id}
          nameProject={elem.name}
          nameOwner={elem.owner.login}
          description={elem.description}
          url={elem.html_url}
          urlImg={elem.owner.avatar_url}
        />
      ))}
    </div>
    {itemsGithub.length ? (<p className="btn" onClick={handleClick}>Plus de résultats</p>) : ''}
  </>
);

ReposResults.propTypes = {
  itemsGithub: PropTypes.array,
  handleClick: PropTypes.func,
};

ReposResults.defaultProps = {
  itemsGithub: [],
  handleClick: () => {},
};

export default ReposResults;
