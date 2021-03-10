import React from 'react'
import '../index.css'
//components
import Map from './Map.js'
import Inventory from './Inventory.js'
import ItemPopup from './ItemPopup.js'
import Settings from './Settings.js'
//sprite
import sprite1 from '../.././images/sprite-1.png'
import sprite2 from '../.././images/sprite-2.png'
import sprite3 from '../.././images/sprite-3.png'
import sprite4 from '../.././images/sprite-4.png'
import spriteSit from '../.././images/sprite-sit.png'
//UI
import bag from '../.././images/Bag.png'
import gear from '../.././images/Gear.png'
//items
import potion from '../.././images/Red-Potion.png'
import book from '../.././images/Book-3.png'
import crystal from '../.././images/Crystal.png'
import sword from '../.././images/Golden-Sword.png'
import armor from '../.././images/Iron-Armor.png'
import mushroom from '../.././images/Mushroom.png'
import rune from '../.././images/Rune-Stone.png'
import staff from '../.././images/Sapphire-Staff.png'
import sapphire from '../.././images/Sapphire.png'
import hat from '../.././images/Wizard-Hat.png'
import blank from '../.././images/blank.png'

class App extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      showInventory: false,
      inventory: [],
      itemsSrc: [
        `${potion}`,
        `${book}`,
        `${crystal}`,
        `${sword}`,
        `${armor}`,
        `${mushroom}`,
        `${rune}`,
        `${staff}`,
        `${sapphire}`,
        `${hat}`,
      ],
      spritePositionTop: 340,
      spritePositionLeft: 0,
      spriteSrc: `${sprite3}`,
      lastKeyPress: 0,
      showItemPopup: false,
      lastItemClicked: '',
      showSettings: false,
    }
    this.handleKey = this.handleKey.bind(this)
    this.togglePopup = this.togglePopup.bind(this)
    this.pickupItem = this.pickupItem.bind(this)
    this.itemPopup = this.itemPopup.bind(this)
    this.toggleSettings = this.toggleSettings.bind(this)
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKey)
    window.focus()
  }

  handleKey(event) {
    if (event.keyCode === 39) {
      this.setState({
        spritePositionLeft: this.state.spritePositionLeft + 20,
        lastKeyPress: event.keyCode,
        spriteSrc: `${sprite3}`,
      })
    }
    if (event.keyCode === 37) {
      this.setState({
        spritePositionLeft: this.state.spritePositionLeft - 20,
        lastKeyPress: event.keyCode,
        spriteSrc: `${sprite4}`,
      })
    }
    if (event.keyCode === 38) {
      this.setState({
        spritePositionTop: this.state.spritePositionTop - 20,
        lastKeyPress: event.keyCode,
        spriteSrc: `${sprite2}`,
      })
    }
    if (event.keyCode === 40) {
      this.setState({
        spritePositionTop: this.state.spritePositionTop + 20,
        lastKeyPress: event.keyCode,
        spriteSrc: `${sprite1}`,
      })
    }
    if (event.keyCode === 32) {
      this.setState(
        (prevState) => ({
          spritePositionTop: this.state.spritePositionTop - 20,
        }),
        () => {
          setTimeout(() => {
            this.setState((prevState) => ({
              spritePositionTop: this.state.spritePositionTop + 20,
            }))
          }, 500)
        }
      )
    }
    if (event.keyCode === 13) {
      this.setState({
        spriteSrc: `${spriteSit}`,
      })
    }
  }

  togglePopup() {
    this.setState({
      showInventory: !this.state.showInventory,
    })
  }

  pickupItem(src, name, id) {
    let newItems = [...this.state.itemsSrc]
    newItems[id] = blank

    this.setState({
      inventory: [...this.state.inventory, src],
      lastItemClicked: name,
      itemsSrc: newItems,
    })
    this.itemPopup()
  }

  itemPopup() {
    this.setState({
      showItemPopup: !this.state.showItemPopup,
    })
  }

  toggleSettings() {
    this.setState({
      showSettings: !this.state.showSettings,
    })
  }

  render() {
    return (
      <div>
        {/* inventory button */}
        <div className="inventoryBtn" onClick={this.togglePopup}>
          <img src={bag} />
        </div>
        <div className="settingsBtn" onClick={this.toggleSettings}>
          <img src={gear} />
        </div>

        {this.state.showInventory ? (
          <Inventory
            toggle={this.togglePopup}
            inventory={this.state.inventory}
          />
        ) : null}
        {this.state.showItemPopup ? (
          <ItemPopup
            showItemPopup={this.itemPopup}
            lastItemClicked={this.state.lastItemClicked}
          />
        ) : null}
        {this.state.showSettings ? (
          <Settings toggleSettings={this.toggleSettings} />
        ) : null}
        {/* settings buttons */}

        {/* character sprite */}
        <img
          id="sprite"
          src={this.state.spriteSrc}
          style={{
            top: this.state.spritePositionTop,
            left: this.state.spritePositionLeft,
          }}
        />
        {/* game map contaning items and NPC's */}
        <Map pickupItem={this.pickupItem} itemsSrc={this.state.itemsSrc} />
      </div>
    )
  }
}

export default App
