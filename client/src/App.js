import React from 'react';

import { Route, Switch } from 'react-router-dom';

import './App.css';
import Layout from './containers/Layout/Layout';
import Presentes from './containers/Presentes/Presentes';
import Games from './containers/Games/Games';
import AgenciaNOne from './containers/AgenciaNOne/AgenciaNOne';
import Sale from './containers/Sale/Sale';

function App() {
  return (
        <Layout>
            <Switch>
              <Route path="/games" component={Games}/>
              <Route path="/presentes" component={Presentes}/>
              <Route path="/sale" component={Sale}/>
              <Route path="/" exact component={AgenciaNOne}/>
            </Switch>
        </Layout>
  );
}

export default App;
