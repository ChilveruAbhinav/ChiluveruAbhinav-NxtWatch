import styled from 'styled-components'

export const ListItem = styled.li`
  list-style-type: none;
  display: flex;
  width: 30%;
  flex-direction: column;
  align-items: flex-start;
`
export const Thumbnail = styled.img`
  height: 130px;
  width: 250px;
`

export const Info = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`
export const ProfileImg = styled.img`
  height: 25px;
  width: 25px;
  margin-top: 13px;
  margin-right: 5px;
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`
export const Title = styled.p`
  color: #231f20;
  font-size: 15px;
  font-family: 'Roboto';
  margin-bottom: 0px;
`
export const ChannelName = styled.p`
  color: #475569;
  font-size: 12px;
  font-family: 'Roboto';
  margin-bottom: 0px;
`
export const LikeContain = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`
export const Likes = styled.p`
  color: #475569;
  font-size: 13px;
  font-family: 'Roboto';
`
export const TimeDist = styled.p`
  color: #475569;
  font-size: 14px;
  font-family: 'Roboto';
`
