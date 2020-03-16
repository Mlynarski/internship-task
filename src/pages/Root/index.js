import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GlobalStyle from '../../style';
import PageMainTable from '../PageMainTable';

const Root = () => {
  return (
    <div>
      <Router>
        <GlobalStyle />
        <Switch>
          <Route exact path="/" component={PageMainTable} />
        </Switch>
      </Router>
    </div>
  );
};

export default Root;
