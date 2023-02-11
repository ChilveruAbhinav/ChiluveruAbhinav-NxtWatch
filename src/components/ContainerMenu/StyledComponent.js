import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const MenuContain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 30%;
  min-height: 100vh;
`
export const MenuContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
export const MenuItemContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0;
  margin-bottom: 0;
`
export const LinkPara = styled.p`
  font-size: 14px;
  font-family: 'Roboto';
  color: #313131;
  margin-left: 8px;
`

export const ContactUsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const ContactUsHeading = styled.p`
  font-size: 17px;
  font-family: 'Roboto';
  color: #606060;
`

export const LogosContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ContactLogo = styled.img`
  height: 30px;
  width: 30px;
  margin-left: 8px;
`
export const ContactLogoTwo = styled.img`
  height: 30px;
  width: 30px;
`

export const ContactInfo = styled.p`
  font-size: 13px;
  font-weight: 700;
  font-family: 'Roboto';
  color: #606060;
`
export const StyledLink = styled(Link)`
  text-decoration: none;
`
