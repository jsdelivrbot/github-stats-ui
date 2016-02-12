import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';
import {AppBar, IconButton, FlatButton, RaisedButton, Paper, Card, List} from 'material-ui';
require('./main.scss');
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import MyRawTheme from './css/materialThemeCustomizations';
import axios from 'axios';
import _ from 'lodash';
import TopRecommendationList from './components/top-recommendation-list';
import TopUserList from './components/top-user-list';
import USERDATA from './fixtures/sunnyg';
let paperStyles = {
  margin: 10,
  marginBottom: 0, // as already margin top on plots below
  padding: 5,
  fontSize: 22,
  textAlign: 'center',
  display: 'inline-block'
};

export default class Recommendations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
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

  //fetching data after mounting as necessary for ssr
  componentDidMount() {
  }

  render() {
    console.log(USERDATA.most_similar)
    return (
      <div>
        <div
        style={{
          margin: 5
        }}>

        </div>
        <div className="flex-container">
          <TopRecommendationList recommendations={USERDATA.recommendations} />
          <TopUserList most_similar={USERDATA.most_similar} />
        </div>


      </div>
    );
  }
}
