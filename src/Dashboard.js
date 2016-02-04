import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link } from 'react-router';
import {AppBar, IconButton, FlatButton, RaisedButton, Paper, Card, List} from 'material-ui';
require('./main.scss');
import NavigationClose from '../node_modules/material-ui/lib/svg-icons/navigation/close';
import ThemeManager from '../node_modules/material-ui/lib/styles/theme-manager';
import MyRawTheme from './css/materialThemeCustomizations';
import axios from 'axios';
import _ from 'lodash';
import TopChartList from './components/top-chart-list';
import Select from 'react-select';
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
     {name: "repo4", lang: "Python"}, {name: "repo5", lang: "Python"}, {name: "repo6", lang: "Python"},
     {name: "repo7", lang: "R"}, {name: "repo8", lang: "R"}, {name: "repo9", lang: "R"}
     ],
      languages: [
        {value: "All", label: "All Languages"},
        {value: "JavaScript", label: "JavaScript"},
        {value: "Python", label: "Python"},
        {value: "R", label: "R"}
      ],
      selectedLanguage: ""
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

  filterLanguage(selectedLanguage) {
    console.log("selected language");
    console.log(selectedLanguage);
   this.setState({
     selectedLanguage
   })
  }


  render() {
    let {leaderboard, selectedLanguage} = this.state;
    console.log('selected language value:')
    console.log(typeof selectedLanguage);
    console.log(JSON.stringify(selectedLanguage));
    leaderboard = (selectedLanguage !== "All" && selectedLanguage !== "") ? _.filter(leaderboard, (l) => l.lang === selectedLanguage ) : leaderboard;
    return (
      <div>
        <AppBar
          title={<span> Github Dashboard </span>}
          style={{
          maxHeight: '3vw'
          }}
        />
        <div
        style={{
          margin: 10
        }}>
          <Select
            name="form-field-name"
            value="All"
            options={this.state.languages}
            onChange={this.filterLanguage.bind(this)}
          />
        </div>
        <div style={{
                display: 'flex',
                flexFlow: 'row wrap',
                maxHeight: '80vh',
                width: '100%',
                margin: '10px auto 10px'
                }}>

            <TopChartList timeframe="Weekly" data={leaderboard} />
            <TopChartList timeframe="Monthly" data={leaderboard} />


        </div>


      </div>
    );
  }
}
