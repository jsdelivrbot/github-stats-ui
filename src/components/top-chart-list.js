/**
 * Created by devin on 2/4/16.
 */
import React from 'react';
import {Card, List} from 'material-ui';
export default (props) => {
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
        Charts
      </List>
    </Card>
  )
}