import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {SiYoutubegaming} from 'react-icons/si'
import {
  MainContainer,
  TopContainer,
  TrendingImg,
  TrendingHeading,
  Image,
} from './StyledComponent'

class GameContainer extends Component {
  render() {
    return (
      <MainContainer>
        <TopContainer>
          <TrendingImg>
            <Image>
              <SiYoutubegaming />
            </Image>
            <TrendingHeading>Gaming</TrendingHeading>
          </TrendingImg>
        </TopContainer>
      </MainContainer>
    )
  }
}
export default GameContainer
