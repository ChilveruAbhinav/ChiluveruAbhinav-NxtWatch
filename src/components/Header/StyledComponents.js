import styled from 'styled-components'

export const Navbar = styled.nav`
  display: flex;
  justify-content: center;
`
export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background-color: ${props =>
    props.outline === true ? '#313131' : '#ffffff'};
  padding: 25px;
`
export const HeadImg = styled.img`
  height: 35px;
`
export const ModeContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`
export const Profile = styled.img`
  height: 35px;
  margin-right: 10px;
  margin-left: 10px;
`

export const LogoutButton = styled.button`
  border-color: ${props => (props.outline === true ? '#ffffff' : '#3b82f6')};
  border-width: 1px;
  height: 35px;
  width: 90px;
  background-color: transparent;
  color: ${props => (props.outline === true ? '#ffffff' : '#3b82f6')};
  font-size: 13px;
  font-family: 'Roboto';
  margin-right: 10px;
  margin-left: 10px;
  cursor: pointer;
`
export const ThemeButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`
export const PopupContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const PopContain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 25px;
  border-radius: 10px;
  background-color: #212121;
`

export const LogoutPara = styled.p`
  color: #ffffff;
  font-size: 15px;
  font-family: 'Roboto';
`

export const PopButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const CancelButton = styled.button`
  border-color: #ffffff;
  border-width: 1px;
  height: 35px;
  width: 90px;
  background-color: transparent;
  color: #ffffff;
  font-size: 13px;
  font-family: 'Roboto';
  margin-right: 10px;
  margin-left: 10px;
  cursor: pointer;
`
