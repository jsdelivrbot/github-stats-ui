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
     leaderboard:  ["repo1", "repo2", "repo3"]
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

          <Card style={{
                flexGrow: 1,
                overflowY: 'auto',
                margin: '1vw'
            }}>
            <List>
              <div style={{
                    color: 'black',
                    fontSize: 20,
                    textAlign: 'center'
                       }}>
                Top Monthly
              </div>
              Charts
            </List>
          </Card>
            <Card style={{
                flexGrow: 1,
                overflowY: 'auto',
                margin: '1vw'
            }}>
            <List>
              <div style={{
                    color: 'black',
                    fontSize: 20,
                    textAlign: 'center'
                       }}>
                Top Weekly
              </div>
              Charts
            </List>
          </Card>

        </div>


      </div>
    );
  }
}
