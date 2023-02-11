import {formatDistanceToNow} from 'date-fns'
import {
  ListItem,
  Thumbnail,
  Info,
  ProfileImg,
  TitleContainer,
  Title,
  ChannelName,
  LikeContain,
  Likes,
  TimeDist,
} from './StyledComponent'

const HomeVideoListItem = props => {
  const {videoDataDetails} = props
  const {
    title,
    thumbnailUrl,
    viewCount,
    channelName,
    profileImage,
    publishedDate,
  } = videoDataDetails

  const videoDist = formatDistanceToNow(new Date(publishedDate))
  console.log(videoDist)
  return (
    <ListItem>
      <Thumbnail alt="video thumbnail" src={thumbnailUrl} />
      <Info>
        <ProfileImg alt="channel logo" src={profileImage} />
        <TitleContainer>
          <Title>{title}</Title>
          <ChannelName>{channelName}</ChannelName>
          <LikeContain>
            <Likes>{viewCount} views</Likes>
            <TimeDist> . {videoDist}</TimeDist>
          </LikeContain>
        </TitleContainer>
      </Info>
    </ListItem>
  )
}
export default HomeVideoListItem
