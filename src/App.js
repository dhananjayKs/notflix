import React from 'react';
import './App.css';
import {MoviesPage} from './MoviesPage'
import { TvPage } from './TvPage';
import {connect} from 'react-redux'       //imports connest
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getConfig} from './actions'
import {MovieDetails} from './MovieDetails'
import { ShowDetails } from './ShowDetails';

import {BrowserRouter, Route, Switch , Redirect} from 'react-router-dom'
import {NavBar} from './NavBar'

function App(props) {
  const dispatch=useDispatch()

  useEffect(() => {
    dispatch(getConfig())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  
  let select=useSelector(state=>state)
  
  return (
    <BrowserRouter>
      <NavBar/>
      <Switch>
        <Route exact path="/">
          <Redirect to="/Movies" />
        </Route>
        <Route exact path='/Movies'>
          <MoviesPage></MoviesPage>
        </Route>
        <Route exact path='/Tv'>
          <TvPage></TvPage>
        </Route>
        <Route path='/Details'>
          {select.selected.title ? <MovieDetails/> : <ShowDetails/>}
        </Route>
        <Route path='/Movies/MovieDetails'>
          <MovieDetails/>
        </Route>
        <Route path='/Tv/ShowDetails'>
          <ShowDetails/>
        </Route>
      </Switch>
    </BrowserRouter>
    
  );
}

function mapStateToProps(state){        //function takes state and returns a part of the state
  return{
    movies:state.movies,
    selected:state.selected
  }
}
export default connect(mapStateToProps)(App);             //connecttakes a function that chooses the state and the component that recieves it as props
