import React from 'react';
import Items from './Items.js'

class Map extends React.Component {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    let allTiles = []
    for (let i = 0; i < 3116; i++) {
      allTiles.push(<div className="tile" id={`tile${i}`}
        key={`tile${i}`} ></div>)
    }
    return (
      <div>
        {/* <div className="tilemap">
          {allTiles}
        </div> */}
        <Items pickupItem={this.props.pickupItem} />
      </div>
    )
  }
}

export default Map;