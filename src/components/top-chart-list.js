/**
 * Created by devin on 2/4/16.
 */
import React from 'react';
import {Card, List, ListItem, Paper} from 'material-ui';
import _ from 'lodash';
let TopChartList = (props) => {
  let list = _.map(props.data, (d, i) => (
      <ListItem
        primaryText={d.name}
        secondaryText={"Language: " + d.lang }
      />
    )
  );
  return (
    <Paper
      zDepth={5}
      style={{
        flexGrow: 1,
        margin: '1vw'
      }}
      className="top-list"
    >
      <div style={{
                    color: 'black',
                    textAlign: 'center'
                       }}>
        {props.timeframe}
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

TopChartList.propTypes = {
  timeframe: React.PropTypes.string.isRequired,
  data: React.PropTypes.array.isRequired
}

export default TopChartList;