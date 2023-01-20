import './index.css'
import {HiHome, HiFire} from 'react-icons/hi'

import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'

const MenuContainer = () => (
  <div className="menu-container">
    <div className="menu-content">
      <div className="menu-item-container">
        <button className="menu-button" type="button">
          <HiHome className="menu-icon" />
          <p className="menu-item-name">Home</p>
        </button>
      </div>
      <div className="menu-item-container">
        <button className="menu-button" type="button">
          <HiFire className="menu-icon" />
          <p className="menu-item-name">Trending</p>
        </button>
      </div>
      <div className="menu-item-container">
        <button className="menu-button" type="button">
          <SiYoutubegaming className="menu-icon" />
          <p className="menu-item-name">Gaming</p>
        </button>
      </div>
      <div className="menu-item-container">
        <button className="menu-button" type="button">
          <MdPlaylistAdd className="menu-icon" />
          <p className="menu-item-name">Saved Videos</p>
        </button>
      </div>
    </div>
    <div className="contact-us-container">
      <h1 className="contact-us-heading">CONTACT US</h1>
      <div className="logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
          alt="facebook logo"
          className="logo-2"
        />

        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
          alt="twitter logo"
          className="logo"
        />

        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
          alt="linked in logo"
          className="logo"
        />
        <p className="contact-para">
          Enjoy! Now to see your channels and recommendations
        </p>
      </div>
    </div>
  </div>
)
export default MenuContainer
