import React from 'react'
import '../index.css'
import Tiles from './Tiles.js'
import sprite1 from '../.././images/sprite-1.png'
import sprite2 from '../.././images/sprite-2.png'
import sprite3 from '../.././images/sprite-3.png'
import sprite4 from '../.././images/sprite-4.png'

class App extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      inventory: [],
      spritePositionTop: 340,
      spritePositionLeft: 0,
      spriteSrc: `${sprite3}`,
      lastKeyPress: 0,
    };
    this.handleKey = this.handleKey.bind(this);
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKey);
    window.focus();
  }

  getSpriteMapLocation(keyCode) {

  }

  handleKey(event) {
    if (event.keyCode === 39) {
      this.setState({
        spritePositionLeft: this.state.spritePositionLeft + 20,
        lastKeyPress: event.keyCode,
        spriteSrc: `${sprite3}`
      })
    }
    if (event.keyCode === 37) {
      this.setState({
        spritePositionLeft: this.state.spritePositionLeft - 20,
        lastKeyPress: event.keyCode,
        spriteSrc: `${sprite4}`
      })
    }
    if (event.keyCode === 38) {
      this.setState({
        spritePositionTop: this.state.spritePositionTop - 20,
        lastKeyPress: event.keyCode,
        spriteSrc: `${sprite2}`
      })
    }
    if (event.keyCode === 40) {
      this.setState({
        spritePositionTop: this.state.spritePositionTop + 20,
        lastKeyPress: event.keyCode,
        spriteSrc: `${sprite1}`
      })
    }
  }

  render() {
    return (
      <div >
        <img
          id='sprite'
          src={this.state.spriteSrc}
          style={{ top: this.state.spritePositionTop, left: this.state.spritePositionLeft }}
        />
        <Tiles />
      </div>
    )
  }
}

export default App