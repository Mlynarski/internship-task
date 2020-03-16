import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import getData from '../../api';
import GlobalStyle from '../../style';
import AppContext from '../../context';
import Spinner from '../../components/Spinner';
import PageMainTable from '../PageMainTable';

const Root = () => {
  const [apiData, setApiData] = useState(null);
  const [apiError, setApiError] = useState(false);

  useEffect(() => {
    if (apiData === null) {
      getData(setApiData, setApiError);
    }
  }, [apiData]);

  return (
    <Router>
      <GlobalStyle />
      {apiData === null ? (
        <Spinner failed={apiError} />
      ) : (
        <AppContext.Provider value={apiData}>
          <Switch>
            <Route exact path="/" component={PageMainTable} />
          </Switch>
        </AppContext.Provider>
      )}
    </Router>
  );
};

export default Root;
