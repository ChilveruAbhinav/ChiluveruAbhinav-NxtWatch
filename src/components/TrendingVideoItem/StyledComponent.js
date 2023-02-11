import styled from 'styled-components'

export const ListItem = styled.li`
  list-style-type: none;
  display: flex;
  width: 90%;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 6px;
  margin-bottom: 6px;
`
export const Thumbnail = styled.img`
  height: 180px;
  width: 290px;
  margin-right: 8px;
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`
export const Title = styled.p`
  color: #212121;
  font-size: 15px;
  font-family: 'Roboto';
  font-weight: 600;
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
