import React, { Component } from 'react';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'reactstrap' 
import './App.css';

import { Provider } from 'react-redux'
import store from './store'

import AppNav from './components/AppNav'
import ShoppingLists from './components/ShoppingLists'
import ItemModal from './components/ItemModal'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNav/>
          <Container>
            <ItemModal/>
          </Container>
          <ShoppingLists/>
          
        </div>
      </Provider>
    );
  }
}

export default App;
