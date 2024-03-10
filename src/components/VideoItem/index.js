import {formatDistanceToNow} from 'date-fns'

import {
  Li,
  ThumbnailImg,
  FlexDiv,
  ProfileImg,
  Title,
  UlContainer,
  ViewCountLi,
  LinkItem,
  DivItem,
} from './styledComponents'

const VideoItem = props => {
  const {itemDetails, darkMode} = props
  const {channel, publishedAt, thumbnailUrl, title, viewCount, id} = itemDetails
  const {name, profileImageUrl} = channel
  const dateDistance = formatDistanceToNow(new Date(publishedAt))
  const years = dateDistance[1]

  return (
    <LinkItem to={`/videos/${id}`}>
      <Li>
        <ThumbnailImg src={thumbnailUrl} alt="video thumbnail" />
        <DivItem>
          <FlexDiv>
            <ProfileImg src={profileImageUrl} alt="channel logo" />
            <Title darkMode={darkMode}>{title}</Title>
          </FlexDiv>
          <UlContainer>
            <ViewCountLi>{name}</ViewCountLi>
            <ViewCountLi>{viewCount}</ViewCountLi>
            <ViewCountLi>{`${years} years ago`}</ViewCountLi>
          </UlContainer>
        </DivItem>
      </Li>
    </LinkItem>
  )
}
export default VideoItem
