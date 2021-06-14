import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Nav from './Nav.js'
// import MovieList from './MovieList.js'
// import Login from './Login.js'


function App() {
  return (
    <div className="App">

      <Router>
        <Nav />
        {/* <Switch>
          <Route exact path='/'><Login /></Route>
          <Route path='/movies/'><Movies /></Route> 
        <Route path='/movies?search=' component={MovieList}></Route>
        <Route path='reviews/:movieId'><Movie movieId={movieID} /></Route>
        <Route path='reviews' component={Reviews} />
        <Route path='register' component={Register} /> 

        </Switch> */}


      </Router >
    </div >
  );
}

export default App;
