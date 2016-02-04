import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link } from 'react-router';
import {AppBar, IconButton, FlatButton, RaisedButton, Paper, Card, List} from 'material-ui';
require('./main.scss');
import NavigationClose from 'material-ui/lib/svg-icons/navigation/close';
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import MyRawTheme from './css/materialThemeCustomizations';
import axios from 'axios';
import _ from 'lodash';
import TopChartList from './components/top-chart-list';
let paperStyles = {
  margin: 10,
  marginBottom: 0, // as already margin top on plots below
  padding: 5,
  fontSize: 22,
  textAlign: 'center',
  display: 'inline-block'
};

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     leaderboard:  [
     {name: "repo1", lang: "JavaScript"}, {name: "repo2", lang: "JavaScript"}, {name: "repo3", lang: "JavaScript"},
     {name: "repo1", lang: "Python"}, {name: "repo2", lang: "Python"}, {name: "repo3", lang: "Python"},
     {name: "repo1", lang: "R"}, {name: "repo2", lang: "R"}, {name: "repo3", lang: "R"}
     ]
    }
  }

// want to add colors to context to make available to other components
  static childContextTypes = {
    //just declares we will stick on child context, not actually setting it
    muiTheme: React.PropTypes.object
  };

  getChildContext() {
    return {
      muiTheme: ThemeManager.getMuiTheme(MyRawTheme)
    };
  }


  render() {
    return (
      <div>
        <AppBar
          title={<span> Github Dashboard </span>}
          style={{
          maxHeight: '3vw'
          }}
        />
        <div style={{
                display: 'flex',
                flexFlow: 'row wrap',
                maxWidth: 1200,
                maxHeight: '500',
                width: '100%',
                margin: '30px auto 30px'
                }}>

            <TopChartList timeframe="Weekly" data={this.state.leaderboard} />
            <TopChartList timeframe="Monthly" data={this.state.leaderboard} />


        </div>


      </div>
    );
  }
}
