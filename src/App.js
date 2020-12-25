import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Home from './components/Home'
import About from './components/About'
import Merch from './components/Merch'
import Coffee from './components/Coffee'
import Checkout from './components/Checkout'

class App extends React.Component {
render() {
  return (
    <Switch>
      <Route path='/' component={Home} exact/>
      <Route path='/about' component={About}/>
      <Route path='/merch' component={Merch}/>
      <Route path='/coffee' component={Coffee}/>
      <Route path='/checkout' component={Checkout}/>
    </Switch>
  )
  }
}

export default App;
