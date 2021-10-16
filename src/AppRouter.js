import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/home/Home';
import Passbook from './components/passbook/Passbook';

const AppRouter = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/passbook' component={Passbook} />
      <Route exact path='/billbox' component={Passbook} />
      <Route exact path='/profile' component={Passbook} />
      <Route exact path='/more' component={Passbook} />
      <Route component={() => 404} /> {/* 404 Route */}
    </Switch>
  );
};

export default AppRouter;
