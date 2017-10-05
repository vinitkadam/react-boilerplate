/**
 *
 * App.js
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

function App({ match }) {
  return (
    <div>
      <Switch>
        <Route exact path={match.url} component={HomePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}

App.propTypes = {
  match: PropTypes.object.isRequired,
};

export default App;
