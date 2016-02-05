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
import Plotly from 'plotly.js'
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
    var data = require('./fixtures/mockData');
    this.state = {
      data: data,
      visualizations: [
        {value: "data2", label: "Open Issues Count"},
        {value: "data1", label: "Star count over time"}
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

  filterViz(val) {
    console.log(val);
    console.log(typeof val);
    Plotly.newPlot('myDiv', this.state.data[val].x.data);
  }


  componentDidMount() {
    Plotly.newPlot('myDiv', this.state.data.data1.x.data);
  }
  render() {
    console.log(this.state.data)
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
            value="data1"
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
        <div id="myDiv" style={{
        height: 600,
        width: 800
        }}>
        </div>

        </div>


      </div>
    );
  }
}
