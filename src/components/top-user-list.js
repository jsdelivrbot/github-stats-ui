/**
 * Created by devin on 2/4/16.
 */
import React from 'react';
import {Card, List, ListItem, Paper} from 'material-ui';
import _ from 'lodash';
import Separator from "./Separator";

let TopUserList = (props) => {
  let list = _.map(props.most_similar, (d, i) => (
    <div
      key={d.actor_login}
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
        onClick={ () => window.open(`https://github.com/${d.actor_login}`)}
        >
          {d.actor_login }
        </span>
        <span style={{
        position: "relative",
        display: "block",
        color: "#A9A9A9",
        fontSize: 14,
        fontWeight: 100
        }}>
         Similar Repositories in Network: {  d.n }
        </span>
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
      className="top-users"
    >
      <div style={{
                    color: 'black',
                    textAlign: 'center'
                       }}>
        Most Similar Users
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
  most_similar: React.PropTypes.array.isRequired
}

export default TopUserList;