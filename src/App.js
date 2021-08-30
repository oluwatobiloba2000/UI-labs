import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Head } from './_document';
import { route } from './routes';

function App() {
  return (
    <Router>
      <Switch>
        {route.map((route, index) =>
          <Route key={route.path + index} path={route.path} exact={route.exact}>
            <Head {...route.meta} />
            {route.page()}
          </Route>
        )}
      </Switch>
    </Router>
  );
}

export default App;
