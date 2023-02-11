import {Component} from 'react'
import {HiFire} from 'react-icons/hi'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import TrendingVideoItem from '../TrendingVideoItem'
import {
  MainContainer,
  TopContainer,
  TrendingImg,
  TrendingHeading,
  Image,
  LoadingView,
  FailureView,
  FailureImg,
  FailureHeading,
  FailurePara,
  RetryButton,
  TrendingVideosList,
} from './StyledComponent'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class TrendingContainer extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    trendingData: [],
  }

  componentDidMount() {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })

    const jwtToken = Cookies.get('jwt_token')
    const trendingUrl = 'https://apis.ccbp.in/videos/trending'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(trendingUrl, options)
    if (response.ok === true) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.videos.map(videoDetail => ({
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
        trendingData: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    }
    if (response.status === 401) {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  renderLoadingView = () => (
    <LoadingView data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </LoadingView>
  )

  renderTrendingFail = () => (
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

  renderTrendingView = () => {
    const {trendingData} = this.state
    return (
      <TrendingVideosList>
        {trendingData.map(item => (
          <TrendingVideoItem key={item.id} details={item} />
        ))}
      </TrendingVideosList>
    )
  }

  renderTrendingJsx = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderTrendingView()
      case apiStatusConstants.failure:
        return this.renderTrendingFail()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <MainContainer>
        <TopContainer>
          <TrendingImg>
            <Image>
              <HiFire />
            </Image>
            <TrendingHeading>Trending</TrendingHeading>
          </TrendingImg>
        </TopContainer>
        {this.renderTrendingJsx()}
      </MainContainer>
    )
  }
}
export default TrendingContainer
