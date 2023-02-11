import {Component} from 'react'

import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import {
  LoginFormContainer,
  Form,
  LoginLogo,
  InputContainer,
  Label,
  InputEl,
  ShowPassword,
  InputShow,
  ShowLabel,
  LoginButton,
  ErrorPara,
} from './StyledComponents'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',
    showPassword: false,
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
    })
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  onClickShow = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  render() {
    const {
      showSubmitError,
      showPassword,
      password,
      username,
      errorMsg,
    } = this.state
    const jwtToken = Cookies.get('jwt_token')

    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    console.log(errorMsg)
    return (
      <LoginFormContainer>
        <Form onSubmit={this.submitForm}>
          <LoginLogo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="website logo"
          />
          <InputContainer>
            <Label htmlFor="username">USERNAME</Label>
            <InputEl
              type="text"
              id="username"
              value={username}
              placeholder="Username"
              onChange={this.onChangeUsername}
            />
          </InputContainer>
          <InputContainer>
            <Label htmlFor="password">PASSWORD</Label>
            <InputEl
              type={showPassword ? 'text' : 'password'}
              id="password"
              placeholder="Password"
              value={password}
              onChange={this.onChangePassword}
            />
          </InputContainer>
          <ShowPassword>
            <InputShow type="checkbox" id="check" onClick={this.onClickShow} />
            <ShowLabel htmlFor="check">Show Password</ShowLabel>
          </ShowPassword>
          <LoginButton type="submit">Login</LoginButton>
          {showSubmitError && <ErrorPara>*{errorMsg}</ErrorPara>}
        </Form>
      </LoginFormContainer>
    )
  }
}

export default LoginForm
