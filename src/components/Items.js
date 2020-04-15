import React from 'react'
import potion from '../.././images/Potion006.png'

class Items extends React.Component {
  constructor(props, context) {
    super(props, context);
  }


  render() {
    return (
      <div>
        <img
          id='0'
          src={potion}
          styles={{ position: 'relative', top: '100', left: '100' }}
          onClick={this.props.pickupItem.bind(this, { potion })}
        />
        <img
          id='1'
          src={potion}
          styles={{ position: 'relative', top: '100', left: '200' }}
        />
        <img
          id='2'
          src={potion}
          styles={{ position: 'relative', top: '100', left: '300' }}
        />
        <img
          id='3'
          src={potion}
          styles={{ position: 'relative', top: '100', left: '400' }}
        />
        <img
          id='4'
          src={potion}
          styles={{ position: 'relative', top: '100', left: '500' }}
        />
        <img
          id='5'
          src={potion}
          styles={{ position: 'relative', top: '100', left: '600' }}
        />
        <img
          id='6'
          src={potion}
          styles={{ position: 'relative', top: '100', left: '700' }}
        />
        <img
          id='7'
          src={potion}
          styles={{ position: 'relative', top: '100', left: '800' }}
        />
        <img
          id='8'
          src={potion}
          styles={{ position: 'relative', top: '100', left: '900' }}
        />
        <img
          id='9'
          src={potion}
          styles={{ position: 'relative', top: '100', left: '1000' }}
        />
      </div>

    )
  }
}

export default Items;