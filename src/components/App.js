import React, { useEffect, useState } from 'react';
import './App.css';
import Dashboard from './Dashboard';
import Header from './Header';
import Review from './Review';
import Reviews from './Reviews';
import AboutMe from './about-me/AboutMe';
import AboutUs from './about-us/AboutUs';

import { Route, Switch } from 'react-router-dom';

function App() {

  const [reviews, setReviews] = useState();
  // this hook is used only the first time the component launches
  useEffect(() => {
    // we're fetching the review data from the server
    fetch('https://api.nomoreparties.co/emoji-critic-ens').then((res) => {
      return res.json();
    }).then((parsedReviews) => {
      // we're formatting the data and using setData() to update our state
      const reviews = Object.values(parsedReviews);
      setReviews(reviews);
    })
  }, []);

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route exact path="/reviews">
          <Reviews reviews={reviews}/>
        </Route>
        <Route exact path="/reviews/:id">
          <Review reviews={reviews}/>
        </Route>
        <Route path="/about-me">
          <AboutMe />
        </Route>
        <Route path="/about-us">
          <AboutUs />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
