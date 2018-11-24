import React from 'react';
import ReviewsContainer from './components/ReviewsContainer';
import NotFound from './components/NotFound';
import { Route, Switch } from 'react-router-dom';

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={ReviewsContainer} />
      <Route component={NotFound} />
    </Switch>
  );
}
