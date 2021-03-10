import React from 'react'

class InventorySlots extends React.Component {
  constructor(props, context) {
    super(props, context);
  }



  render() {
    let allSlots = []
    for (let i = 0; i < 10; i++) {
      allSlots.push(
        <div
          className='inventorySlot'
          key={`slot${i}`}
          style={{
            backgroundImage: this.props.inventory[i] ? "url(" + this.props.inventory[i][Object.keys(this.props.inventory[i])[0]] + ")" : "url('')"
          }}
        >
        </div>
      )
    }

    return (
      <div className="inventoryInner">
        {allSlots}
      </div>

    )
  }
}

export default InventorySlots;