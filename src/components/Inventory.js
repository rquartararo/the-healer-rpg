import React from 'react'
import Test from '../.././images/Bag.png'

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
      <div>
        <div className="inventoryInner">
          <span className="close" onClick={this.handleClick}>&times;</span>
          <div
            className='inventorySlot'
            id='slot1'
            style={{ backgroundImage: "url(" + this.props.inventory[0] + ")" }}>
          </div>
        </div>
      </div>
    )
  }
}

export default Inventory;