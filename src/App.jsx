import React from 'react';
import Hero from './components/Hero';
import CommentBox from './components/CommentBox';
import About from './components/About';
import NotFound from './components/NotFound';
import Footer from './components/Footer';
import { Route, Switch } from 'react-router-dom';


// Wrapper function for passing props to a Route component
// Wrappers should be passed to the render prop of Route
const CommentBoxWrapper = () => (
  <CommentBox 
    url="/api/comments"
    pollInterval={2000000} 
  />  
);

export default function App() {
  return (
    <div>
      <Hero />
      <Switch>
        <Route exact path="/" render={CommentBoxWrapper} />
        <Route path="/about" render={About} />
        <Route render={NotFound} />
      </Switch>
      <Footer />
    </div>
  );
}
