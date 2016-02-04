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
      visualizations: [
        {value: "stars", label: "stars over time"}
      ],
      selectedVis: ""
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

  filterViz(selectedVis) {
    console.log("selected language");
    console.log(selectedVis);
   this.setState({
     selectedViz
   })
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
        <div
        style={{
          margin: 10
        }}>
          <Select
            name="form-field-name"
            value=""
            options={this.state.visualizations}
            onChange={this.filterViz.bind(this)}
          />
        </div>
        <div style={{
                display: 'flex',
                flexFlow: 'row wrap',
                maxHeight: '80vh',
                width: '100%',
                margin: '10px auto 10px'
                }}>

          Dashboard stuff
        </div>


      </div>
    );
  }
}
