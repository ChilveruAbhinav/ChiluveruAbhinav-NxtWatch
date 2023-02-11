import {HiHome, HiFire} from 'react-icons/hi'

import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'

import {
  MenuContain,
  MenuContent,
  MenuItemContainer,
  LinkPara,
  ContactUsContainer,
  ContactUsHeading,
  LogosContainer,
  ContactLogo,
  ContactLogoTwo,
  ContactInfo,
  StyledLink,
} from './StyledComponent'

const MenuContainer = () => {
  const style = {fontSize: '100%'}

  return (
    <>
      <MenuContain>
        <MenuContent>
          <StyledLink to="/">
            <MenuItemContainer>
              <HiHome style={style} />
              <LinkPara>Home</LinkPara>
            </MenuItemContainer>
          </StyledLink>
          <StyledLink to="/trending">
            <MenuItemContainer>
              <HiFire />
              <LinkPara>Trending</LinkPara>
            </MenuItemContainer>
          </StyledLink>
          <StyledLink to="/gaming">
            <MenuItemContainer>
              <SiYoutubegaming />
              <LinkPara>Gaming</LinkPara>
            </MenuItemContainer>
          </StyledLink>
          <StyledLink to="/saved-videos">
            <MenuItemContainer>
              <MdPlaylistAdd />
              <LinkPara>Saved Videos</LinkPara>
            </MenuItemContainer>
          </StyledLink>
        </MenuContent>
        <ContactUsContainer>
          <ContactUsHeading>CONTACT US</ContactUsHeading>
          <LogosContainer>
            <ContactLogoTwo
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
              alt="facebook logo"
            />

            <ContactLogo
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
              alt="twitter logo"
            />

            <ContactLogo
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
              alt="linked in logo"
            />
          </LogosContainer>
          <ContactInfo>
            Enjoy! Now to see your channels and recommendations!
          </ContactInfo>
        </ContactUsContainer>
      </MenuContain>
    </>
  )
}
export default MenuContainer
