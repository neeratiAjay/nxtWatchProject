import {formatDistanceToNow} from 'date-fns'

import {
  LinkItem,
  TrendMainContainer,
  ThumbnailImg,
  ContentConatainer,
  TrendingContent,
  DivContainer,
  UlContainer,
  ProfileImg,
  SmallContent,
  LargeSmallText,
} from './styledComponents'

const TrendingVideoItem = props => {
  const {itemDetails, darkMode} = props
  const {channel, publishedAt, thumbnailUrl, title, viewCount, id} = itemDetails
  const {name, profileImageUrl} = channel
  const dateDistance = formatDistanceToNow(new Date(publishedAt))
  const years = dateDistance[1]

  return (
    <LinkItem to={`/videos/${id}`}>
      <TrendMainContainer>
        <ThumbnailImg src={thumbnailUrl} alt="video thumbnail" />
        <DivContainer>
          <ProfileImg src={profileImageUrl} alt="" />
          <ContentConatainer>
            <TrendingContent darkMode={darkMode}>{title}</TrendingContent>
            <LargeSmallText darkMode={darkMode}>{name}</LargeSmallText>
            <UlContainer>
              <SmallContent darkMode={darkMode} channel>
                {name}
              </SmallContent>

              <SmallContent
                darkMode={darkMode}
              >{`${viewCount} views . ${years} ago`}</SmallContent>
              <SmallContent darkMode={darkMode}>{name}</SmallContent>
            </UlContainer>
          </ContentConatainer>
        </DivContainer>
      </TrendMainContainer>
    </LinkItem>
  )
}
export default TrendingVideoItem
