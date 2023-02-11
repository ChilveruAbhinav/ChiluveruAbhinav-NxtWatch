import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  width: 70%;
`
export const TopContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const TrendingImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Image = styled.div`
  height: 35px;
  width: 35px;
`
export const TrendingHeading = styled.h1`
  color: #0f0f0f;
  font-size: 25px;
  font-family: 'Roboto';
  font-weight: 600;
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
export const TrendingVideosList = styled.ul`
  padding-left: 0px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
