import {formatDistanceToNow} from 'date-fns'
import {
  ListItem,
  Thumbnail,
  TitleContainer,
  Title,
  ChannelName,
  LikeContain,
  Likes,
  TimeDist,
} from './StyledComponent'

const TrendingVideoItem = props => {
  const {details} = props
  const {title, thumbnailUrl, viewCount, channelName, publishedDate} = details

  const videoDist = formatDistanceToNow(new Date(publishedDate))
  console.log(videoDist)
  return (
    <ListItem>
      <Thumbnail alt="video thumbnail" src={thumbnailUrl} />
      <TitleContainer>
        <Title>{title}</Title>
        <ChannelName>{channelName}</ChannelName>
        <LikeContain>
          <Likes>{viewCount} views</Likes>
          <TimeDist> . {videoDist}</TimeDist>
        </LikeContain>
      </TitleContainer>
    </ListItem>
  )
}
export default TrendingVideoItem
