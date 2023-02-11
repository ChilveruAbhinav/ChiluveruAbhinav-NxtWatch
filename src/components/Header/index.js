import {Component} from 'react'
import {withRouter, Link} from 'react-router-dom'
import {FaMoon} from 'react-icons/fa'
import Cookies from 'js-cookie'
import {WiDaySunny} from 'react-icons/wi'
import Popup from 'reactjs-popup'

import {
  Navbar,
  HeaderContainer,
  HeadImg,
  ThemeButton,
  ModeContainer,
  Profile,
  LogoutButton,
  PopupContainer,
  PopContain,
  LogoutPara,
  PopButtonsContainer,
  CancelButton,
} from './StyledComponents'

class Header extends Component {
  state = {isDark: false}

  onThemeChange = () => {
    this.setState(prevState => ({isDark: !prevState.isDark}))
  }

  onClickLogout = () => {
    const {history} = this.props

    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  renderLogoutButton = () => {
    const {isDark} = this.state
    return (
      <>
        <PopupContainer>
          <Popup
            modal
            trigger={<LogoutButton outline={isDark}>Logout</LogoutButton>}
          >
            {close => (
              <>
                <PopContain>
                  <LogoutPara>Are you sure, you want to logout?</LogoutPara>
                  <PopButtonsContainer>
                    <CancelButton
                      type="button"
                      className="trigger-button"
                      onClick={() => close()}
                    >
                      Cancel
                    </CancelButton>
                    <LogoutButton
                      type="button"
                      outline={isDark}
                      onClick={this.onClickLogout}
                    >
                      Confirm
                    </LogoutButton>
                  </PopButtonsContainer>
                </PopContain>
              </>
            )}
          </Popup>
        </PopupContainer>
      </>
    )
  }

  render() {
    const {isDark} = this.state

    return (
      <Navbar>
        <HeaderContainer outline={isDark}>
          <Link to="/">
            <HeadImg
              src={
                isDark
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
              }
              alt="website logo"
            />
          </Link>
          <ModeContainer>
            <ThemeButton onClick={this.onThemeChange} data-testid="theme">
              {isDark ? <WiDaySunny /> : <FaMoon />}
            </ThemeButton>
            <Profile
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              alt="profile"
            />
            {this.renderLogoutButton()}
          </ModeContainer>
        </HeaderContainer>
      </Navbar>
    )
  }
}
export default withRouter(Header)
