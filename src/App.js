import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import styled from 'styled-components';

class App extends Component {
  render() {
    return (
      /*<div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>*/


        <div className="Wrapper">
            <SayFullName name ="Вадим" surname="Гайдай" link="vk.com" />
            
        </div>


    );
  }
}

function SayFullName(props) {

    return(
        <div>
            <h1>Мое имя - {props.name}, фамилия - {props.surname}</h1>
            <a href={props.link}>Ссылка на мой профиль </a>
        </div>
    )
    
}




export default App;
