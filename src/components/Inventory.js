import React from 'react'

class Inventory extends React.Component {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    return (
      <div className="inventory">
        <div className="inventoryInner">'Hi this is a popup'</div>
      </div>
    )
  }
}

export default Inventory;