// == Import npm
import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
// == Import
import api from 'src/api';
import SearchBar from 'src/components/SearchBar';
import Message from 'src/components/Message';
import ReposResults from 'src/components/ReposResults';
import Faq from 'src/components/Faq';
import NotFound from 'src/components/NotFound';
import Header from 'src/components/Header';

import './styles.scss';

// == Composant
const App = () => {
  const [value, setValue] = useState('');
  const [message, setMessage] = useState('Veuillez saisir une recherche...');
  const [counterPage, setCounterPage] = useState(2);
  const [dataGithub, setDataGithub] = useState({});

  const handleChangeSearchBar = (e) => {
    setValue(e.target.value);
  };

  const handleSubmitSearchBar = async (e) => {
    try {
      e.preventDefault();
      const response = await api.get(`https://api.github.com/search/repositories?q=${value}&sort=stars&order=desc&page=1&per_page=9`);
      setDataGithub(response.data);
      setMessage(`La recherche à donné ${response.data.total_count} resultats`);
    }
    catch (error) {
      if (value) {
        setMessage(error.message);
      }
      else {
        setMessage('Aucun caractère saisi');
      }
      setDataGithub({});
    }
  };

  const handleClickReposResults = async () => {
    try {
      const response = await api.get(`https://api.github.com/search/repositories?q=${value}&sort=stars&order=desc&page=${counterPage}&per_page=9`);
      const cloneDataGithub = dataGithub;
      response.data.items.map((elem) => cloneDataGithub.items.push(elem));
      setDataGithub(cloneDataGithub);
      setCounterPage(counterPage + 1);
    }
    catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <div className="app">
      <Header />
      <Switch>
        <Route path="/" exact>
          <SearchBar
            valueInput={value}
            handleChange={handleChangeSearchBar}
            handleSubmit={handleSubmitSearchBar}
          />
          <Message message={message} />
          <ReposResults itemsGithub={dataGithub.items} handleClick={handleClickReposResults} />
        </Route>
        <Route path="/faq" exact>
          <Faq />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
};

// == Export
export default App;
