import React, { Component } from 'react';

import './App.css';
import Grid from 'react-bootstrap/lib/Grid';
//import Row from 'react-bootstrap/lib/Row';
//import Col from 'react-bootstrap/lib/Col';

import styled from 'styled-components';


import Header from './components/header'
import Menu from './components/menu'
import Main from './components/main'


const bgMain = process.env.PUBLIC_URL + '/img/bg.jpg';

const HeaderWrapper = styled.header`
    width: 100%;
    height: 49px;
    background-color: #242424;
    opacity: 0.8;
`
const MenuWrapper = styled.section`
    height: 89px;
    padding-top: 20px;
`

const MainWrapper = styled.main`
    width: 100%;
    min-height: 600px;
    padding-top: 130px;
    background: url(${bgMain}) no-repeat;
    background-size: cover;
`
class App extends Component {
  render() {
    return (

        <div className="App">
            <HeaderWrapper>
                <Grid>
                    <Header></Header>
                </Grid>
            </HeaderWrapper>
            <MenuWrapper>
                <Grid>
                    <Menu></Menu>
                </Grid>
            </MenuWrapper>
            <MainWrapper>
                <Grid>
                    <Main></Main>
                </Grid>
            </MainWrapper>

        </div>

    );
  }
}


export default App;
