import {Component} from 'react'
import './index.css'

import {FaMoon} from 'react-icons/fa'
import {WiDaySunny} from 'react-icons/wi'

class Header extends Component {
  state = {
    isDark: true,
  }

  onClickMoon = () => {
    this.setState(prevState => ({isDark: !prevState.isDark}))
  }

  render() {
    const {isDark} = this.state
    return (
      <nav className="nav-header">
        <div className={isDark ? 'nav-container' : 'dark-background'}>
          <img
            src={
              isDark
                ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            }
            alt="nxt watch logo"
            className="nav-img"
          />
          <div className="logout-container">
            <button
              type="button"
              className="theme-change-button"
              onClick={this.onClickMoon}
            >
              {isDark ? (
                <FaMoon className="icon" />
              ) : (
                <WiDaySunny className="icon" />
              )}
            </button>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              alt="profile"
              className="profile"
            />
            <button
              className={isDark ? 'logout-button' : 'dark-button'}
              type="button"
            >
              Logout
            </button>
          </div>
        </div>
      </nav>
    )
  }
}
export default Header
