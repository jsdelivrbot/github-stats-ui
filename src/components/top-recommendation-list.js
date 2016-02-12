/**
 * Created by devin on 2/4/16.
 */
import React from 'react';
import {Card, List, ListItem, Paper} from 'material-ui';
import _ from 'lodash';
import Separator from "./Separator";
const languageIcons = {
  "C": "devicon-c-line-wordmark",
  "COFFEESCRIPT": "devicon-coffeescript-original",
  "C+": "devicon-cplusplus-line",
  "C#": "devicon-csharp-line",
  "CSS": "devicon-css3-plain",
  "DOCKER": "devicon-docker-plain",
  "DOTNET": "devicon-dot-net-plain",
  "ERLANG": "devicon-erlang-plain",
  "GO": "devicon-go-plain",
  "HTML": "devicon-html5-plain",
  "JAVA": "devicon-java-plain",
  "JAVASCRIPT": "devicon-nodejs-plain",
  "MYSQL": "devicon-mysql-plain",
  "PHP": "devicon-php-plain",
  "POSTGRESQL": "devicon-postgresql-plain",
  "PYTHON": "devicon-python-plain",
  "REDIS": "devicon-redis-plain",
  "RUBY": "devicon-ruby-plain",
  "SASS": "devicon-sass-original",
  "VIML": "devicon-vim-plain"
  }
let TopUserList = (props) => {
  let list = _.map(props.recommendations, (d, i) => (
    <div
      key={d.name}
    >
      <div
        style={{
          display: "inline-block",
          margin: 5
        }}
      >
        <span style={{
        position: "relative",
        display: "block",
        fontSize: 16
        }}
        onClick={ () => window.open(`https://github.com/${d.repo_name}`)}
        >
          {d.repo_name}
        </span>
        <span style={{
        position: "relative",
        display: "block",
        color: "#A9A9A9",
        fontSize: 14,
        fontWeight: 100
        }}>
         Starred in Network: {  d.n }
        </span>
      </div>
      <div
        style={{
          display: "inline-block",
          float: 'right',
          margin: "12px 10px 5px auto",
          fontSize: 18
        }}
      >
        <i className={"devicon-github-plain"}></i>
      </div>
      <Separator />
    </div>
    )
  );
  return (
    <Paper
      zDepth={5}
      style={{
        flexGrow: 1,
        margin: '1vw'
      }}
      className="top-recommendations"
    >
      <div style={{
                    color: 'black',
                    textAlign: 'center'
                       }}>
        Recommended Repositories
      </div>
      <Card style={{
      overflowY: 'auto'
      }} >
        <List>
          {list}
        </List>
      </Card>
    </Paper>
  )
};

TopUserList.propTypes = {
  recommendations: React.PropTypes.array.isRequired
}

export default TopUserList;