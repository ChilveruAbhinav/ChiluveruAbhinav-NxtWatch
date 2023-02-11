import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 70%;
  min-height: 100vh;
`

export const Banner = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  height: 250px;
  width: 100%;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
export const Contain = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`
export const BannerLogo = styled.img`
  height: 40px;
`
export const BannerPara = styled.p`
  color: #000000;
  font-size: 15px;
  font-family: 'Roboto';
  margin-top: 30px;
  margin-bottom: 15px;
`
export const BannerButton = styled.button`
  height: 40px;
  border: 1px solid #000000;
  background-color: transparent;
  color: #000000;
  font-size: 12px;
  width: 150px;
  font-family: 'Roboto';
  font-weight: 600;
  margin-top: 15px;
`
export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
`
export const SearchEL = styled.input`
  height: 35px;
  width: 280px;
  border: 1px solid #cccccc;
`
export const SearchButton = styled.button`
  border: 1px solid #cccccc;
  background-color: transparent;
  height: 35px;
  width: 50px;
  cursor: pointer;
`
export const LoadingView = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
`
export const FailureView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const FailureImg = styled.img`
  height: 90px;
`
export const FailureHeading = styled.h1`
  color: #212121;
  font-size: 20px;
  font-family: 'Roboto';
`
export const FailurePara = styled.p`
  color: #212121;
  font-size: 13px;
  font-family: 'Roboto';
`
export const RetryButton = styled.button`
  background-color: #00306e;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  color: #ffffff;
  font-size: 13px;
  font-family: 'Roboto';
`
export const HomeVideosList = styled.ul`
  padding-left: 0px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
`

export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`

export const NoVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const NoVideoImg = styled.img`
  height: 60px;
  width: 60px;
`
export const NoVideosHeading = styled.h1`
  color: #212121;
  font-size: 20px;
  font-family: 'Roboto';
`
export const NoVideosPara = styled.p`
  color: #212121;
  font-size: 13px;
  font-family: 'Roboto';
`
