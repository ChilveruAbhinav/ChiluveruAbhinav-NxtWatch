import styled from 'styled-components'

export const LoginFormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 8px 40px rgba(7, 7, 7, 0.08);
`
export const LoginLogo = styled.img`
  height: 30px;
  margin-bottom: 20px;
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 20px;
`
export const Label = styled.label`
  color: #606060;
  font-size: 12px;
  font-weight: 600;
  font-family: 'Roboto';
  margin-bottom: 6px;
`
export const InputEl = styled.input`
  height: 35px;
  width: 250px;
`

export const ShowPassword = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  align-self: flex-start;
`
export const InputShow = styled.input`
  height: 30px;
`

export const ShowLabel = styled.label`
  color: #000000;
  font-size: 15px;
  font-family: 'Roboto';
`
export const LoginButton = styled.button`
  height: 40px;
  width: 100%;
  outline: none;
  cursor: pointer;
  background-color: #3b82f6;
  border-radius: 6px;
  border: none;
  color: #ffffff;
  font-size: 15px;
  font-family: 'Roboto';
  margin-top: 15px;
`
export const ErrorPara = styled.p`
  color: #ff0000;
  font-size: 13px;
  font-family: 'Roboto';
`
