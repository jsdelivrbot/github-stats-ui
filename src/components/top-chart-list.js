/**
 * Created by devin on 2/4/16.
 */
import React from 'react';
import {Card, List, ListItem} from 'material-ui';
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
    <div style={{
                flexGrow: 1,
                margin: '1vw',
                width: 475 // set so has very basic wrapping on mobile
            }}>
      <div style={{
                    color: 'black',
                    fontSize: 20,
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
    </div>
  )
};

TopChartList.propTypes = {
  timeframe: React.PropTypes.string.isRequired,
  data: React.PropTypes.array.isRequired
}

export default TopChartList;