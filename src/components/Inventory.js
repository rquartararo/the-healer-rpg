import React from 'react'
import InventorySlots from './InventorySlots.js'


class Inventory extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.toggle();
  };

  render() {
    return (
      <div className="shadow">
        <div className="inventory">
          <span className="close" onClick={this.handleClick}>&times;</span>
          <InventorySlots inventory={this.props.inventory} />
        </div>
      </div>
    )
  }
}

export default Inventory;