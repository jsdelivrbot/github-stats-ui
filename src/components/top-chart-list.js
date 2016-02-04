/**
 * Created by devin on 2/4/16.
 */
import React from 'react';
import {Card, List} from 'material-ui';
import _ from 'lodash';
let TopChartList = (props) => {
  let list = _.map(props.data, (d, i) => <div> {i + 1}. {d.name} - Language: {d.lang} </div>);
  return (
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
          {props.timeframe}
          </div>
        {list}
        </List>
    </Card>
  )
};

TopChartList.propTypes = {
  timeframe: React.PropTypes.string.isRequired,
  data: React.PropTypes.array.isRequired
}

export default TopChartList;