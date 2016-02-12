import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';
import {TextField, Tab, Tabs} from 'material-ui';
require('./main.scss');
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import MyRawTheme from './css/materialThemeCustomizations';
import axios from 'axios';
import _ from 'lodash';
import TopChartList from './components/top-chart-list';
import Select from 'react-select';
import Timeframe from './components/time-frame';
import Timeline from './components/timeline';
import LEADERBOARD from './fixtures/top_list';
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
     ],
      languages: [
        {value: "All", label: "All Languages"}
      ],
      timeframe:  [
        {value: "week", label: "weekly"},
        {value: "month", label: "monthly"}
      ],
      freshness: [
        {value: "med", label: "Balanced"},
        {value: "low", label: "More Established"},
        {value: "high", label: "Newer"}
      ],
      selectedLanguage: "",
      selectedFreshness: "med",
      selectedTimeframe: "month"
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

  handleSelectFreshness(selectedFreshness) {
    console.log("selected freshness");
    console.log(selectedFreshness);
    let leaderboard = LEADERBOARD[this.state.selectedTimeframe + "_" + selectedFreshness];
    this.setState({
      selectedFreshness,
      leaderboard
    })
  }
  handleSelectTimeframe(selectedTimeframe) {
    let leaderboard = LEADERBOARD[selectedTimeframe + "_" + this.state.selectedFreshness];
    this.setState({
      selectedTimeframe,
      leaderboard
    })
  }
  //fetching data after mounting as necessary for ssr
  componentDidMount() {
    let leaderboard = LEADERBOARD["month_" + this.state.selectedFreshness];
    this.setState({
      leaderboard
    })

  }

  render() {
    let {leaderboard, selectedLanguage} = this.state;
    console.log(JSON.stringify(selectedLanguage));
    leaderboard = (selectedLanguage !== "All" && selectedLanguage !== "") ? _.filter(leaderboard, (l) => l.lang === selectedLanguage ) : leaderboard;
    return (
      <div>
        <div
        style={{
          marginTop: 20
        }}>
          <div className="banner">
            <img id="logo" src="https://raw.githubusercontent.com/halcyon-vortex/master/master/assets/github-compass-banner.png" alt="" />
          </div>
        </div>
        {/** // <Select
        //   value="month"
        //   options={this.state.timeframe}
        //   onChange={this.handleSelectTimeframe.bind(this)}
        // />
        // <Select
        //   value="med"
        //   options={this.state.freshness}
        //   onChange={this.handleSelectFreshness.bind(this)}
        // /> */}
        <div className="search-user">
             <TextField
             floatingLabelText="Personalize:"
             onEnterKeyDown={(e) => {
             window.location.href = window.location.href + `recommendations/${e.target.value}`
             }
             }
             />
          <Timeline handleChange={(value) => this.handleSelectFreshness(value)} show={this.state.selectedFreshness} />
        </div>
        <div className="flex-container">
          <TopChartList timeframe={this.state.selectedTimeframe} data={leaderboard} >
            <Tabs
              onChange={(timeframe) => this.handleSelectTimeframe(timeframe)}
            >
              <Tab label="Weekly" value="week" />
              <Tab label="Monthly" value="month" />
            </Tabs>
          </TopChartList>
        </div>


      </div>
    );
  }
}
