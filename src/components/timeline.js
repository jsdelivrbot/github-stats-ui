import React from 'react';
import SelectField from 'material-ui/lib/select-field';
import MenuItem from 'material-ui/lib/menus/menu-item';

export default class SelectFieldExampleSimple extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: 'med'};
  }

  handleChange = (event, index, value) => this.props.handleChange(value);

  render() {
    return (
      <div id="freshness">
        <SelectField value={this.props.show} onChange={this.handleChange}>
          <MenuItem value={'high'} primaryText="Newer"/>
          <MenuItem value={'med'} primaryText="Balanced"/>
          <MenuItem value={'low'} primaryText="More Established"/>
        </SelectField>
      </div>
    );
  }
}