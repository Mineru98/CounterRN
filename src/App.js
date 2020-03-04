import React, { Component } from 'react';
import { Provider } from 'react-redux';
import initStore from './store';
import Counter from './components/counter.js';

const store = initStore();

export default class App extends Component{
  render(){
    return(
      <Provider store={store}>
        <Counter />
      </Provider>
    );
  }
}