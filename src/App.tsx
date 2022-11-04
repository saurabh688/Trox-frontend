import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from "react-redux";
import store from '../src/redux/store';
import { Routes } from './routes';

function App() {
  return (
    <Provider store={store}> 
    <Routes/>
  </Provider>
  );
}

export default App;
