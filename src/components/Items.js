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
          id='potion'
          src={potion}
          styles={{ position: 'relative', top: '100', left: '100' }}
        />
        <img
          id='potion'
          src={potion}
          styles={{ position: 'relative', top: '100', left: '200' }}
        />
        <img
          id='potion'
          src={potion}
          styles={{ position: 'relative', top: '100', left: '300' }}
        />
        <img
          id='potion'
          src={potion}
          styles={{ position: 'relative', top: '100', left: '400' }}
        />
        <img
          id='potion'
          src={potion}
          styles={{ position: 'relative', top: '100', left: '500' }}
        />
        <img
          id='potion'
          src={potion}
          styles={{ position: 'relative', top: '100', left: '600' }}
        />
        <img
          id='potion'
          src={potion}
          styles={{ position: 'relative', top: '100', left: '700' }}
        />
        <img
          id='potion'
          src={potion}
          styles={{ position: 'relative', top: '100', left: '800' }}
        />
        <img
          id='potion'
          src={potion}
          styles={{ position: 'relative', top: '100', left: '900' }}
        />
        <img
          id='potion'
          src={potion}
          styles={{ position: 'relative', top: '100', left: '1000' }}
        />
      </div>

    )
  }
}

export default Items;