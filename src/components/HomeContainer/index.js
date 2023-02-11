import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import {AiOutlineClose, AiOutlineSearch} from 'react-icons/ai'

import HomeVideoListItem from '../HomeVideoListItem'

import {
  MainContainer,
  Banner,
  Contain,
  BannerLogo,
  BannerPara,
  BannerButton,
  SearchContainer,
  SearchEL,
  SearchButton,
  LoadingView,
  FailureView,
  FailureImg,
  FailureHeading,
  FailurePara,
  RetryButton,
  HomeVideosList,
  CloseButton,
  NoVideosContainer,
  NoVideoImg,
  NoVideosHeading,
  NoVideosPara,
} from './StyledComponent'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class HomeContainer extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    homeVideoData: [],
    searchText: '',
    clickedText: '',
    close: false,
  }

  componentDidMount() {
    this.getHomeVideos()
  }

  getHomeVideos = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const {clickedText} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const videoUrl = `https://apis.ccbp.in/videos/all?search=${clickedText}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(videoUrl, options)
    if (response.ok === true) {
      const videosData = await response.json()
      const updatedData = videosData.videos.map(videoDetail => ({
        id: videoDetail.id,
        title: videoDetail.title,
        thumbnailUrl: videoDetail.thumbnail_url,
        channel: videoDetail.channel,
        channelName: videoDetail.channel.name,
        profileImage: videoDetail.channel.profile_image_url,
        viewCount: videoDetail.view_count,
        publishedDate: videoDetail.published_at,
      }))
      this.setState({
        homeVideoData: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    }
    if (response.status === 401) {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
    // console.log(response.ok)
  }

  onSearchEl = event => {
    this.setState({searchText: event.target.value})
  }

  onClickSearchButton = () => {
    const {searchText} = this.state
    this.setState({clickedText: searchText})
  }

  renderVideoFailure = () => (
    <>
      <FailureView>
        <FailureImg
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
          alt="failure view"
        />
        <FailureHeading>Oops! Something Went Wrong</FailureHeading>
        <FailurePara>
          We are having some trouble to complete your request. Please try again.
        </FailurePara>
        <RetryButton type="button">Retry</RetryButton>
      </FailureView>
    </>
  )

  renderLoadingView = () => (
    <LoadingView data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </LoadingView>
  )

  renderHomeVideos = () => {
    const {homeVideoData} = this.state
    if (homeVideoData.length !== 0) {
      return (
        <>
          <HomeVideosList>
            {homeVideoData.map(video => (
              <HomeVideoListItem key={video.id} videoDataDetails={video} />
            ))}
          </HomeVideosList>
        </>
      )
    }
    return (
      <NoVideosContainer>
        <NoVideoImg
          alt="no videos"
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
        />
        <NoVideosHeading>No Search results found</NoVideosHeading>
        <NoVideosPara>
          Try different key words or remove search filter
        </NoVideosPara>
        <RetryButton type="button">Retry</RetryButton>
      </NoVideosContainer>
    )
  }

  renderHomeJsx = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderHomeVideos()
      case apiStatusConstants.failure:
        return this.renderVideoFailure()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  onClickBannerClose = () => {
    this.setState(prevState => ({close: !prevState.close}))
  }

  render() {
    const {searchText, close} = this.state

    return (
      <MainContainer>
        {close ? (
          ''
        ) : (
          <Banner data-testid="banner">
            <Contain>
              <BannerLogo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                alt="nxt watch logo"
              />
              <CloseButton
                type="button"
                data-testid="close"
                onClick={this.onClickBannerClose}
              >
                <AiOutlineClose />
              </CloseButton>
            </Contain>
            <BannerPara>
              Buy Nxt Watch Premium prepaid plans with UPI
            </BannerPara>
            <BannerButton type="button">GET IT NOW</BannerButton>
          </Banner>
        )}

        <SearchContainer>
          <SearchEL
            type="search"
            placeholder="Search"
            value={searchText}
            onChange={this.onSearchEl}
          />
          <SearchButton
            type="button"
            data-testid="searchButton"
            onClick={this.onClickSearchButton}
          >
            <AiOutlineSearch />
          </SearchButton>
        </SearchContainer>
        {this.renderHomeJsx()}
      </MainContainer>
    )
  }
}
export default HomeContainer
