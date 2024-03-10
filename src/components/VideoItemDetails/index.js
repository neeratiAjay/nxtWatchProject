import {Component} from 'react'
import ReactPlayer from 'react-player'

import {formatDistanceToNow} from 'date-fns'

import Cookies from 'js-cookie'

import DarkModeContext from '../../context/DarkModeContext'

import {VideoItemContainer, VideoContainer, Title} from './styledComponents'
import Header from '../Header'

const initialStatus = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideoItemDetails extends Component {
  state = {apiStatus: initialStatus.initial, videoDetails: []}

  componentDidMount() {
    this.getData()
  }

  formattedData = data => ({
    channel: {
      name: data.channel.name,
      profileImageUrl: data.channel.profile_image_url,
    },
    description: data.description,
    id: data.id,
    publishedAt: data.published_at,
    thumbnailUrl: data.thumbnail_url,
    title: data.title,
    viewCount: data.view_count,
    videoUrl: data.video_url,
  })

  getData = async () => {
    this.setState({apiStatus: initialStatus.inProgress})
    const jwtToken = Cookies.get('jwt_token')

    const {match} = this.props
    const {params} = match
    const {id} = params
    const url = `https://apis.ccbp.in/videos/${id}`

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Berear ${jwtToken}`,
      },
    }

    const response = await fetch(url, options)

    if (response.ok === true) {
      const data = await response.json()

      const updatedData = this.formattedData(data.video_details)

      this.setState({
        apiStatus: initialStatus.success,
        videoDetails: updatedData,
      })
    } else {
      this.setState({apiStatus: initialStatus.failure})
    }
  }

  render() {
    const {videoDetails} = this.state
    const {
      channel,
      description,
      publishedAt,
      thumbnailUrl,
      title,
      videoUrl,
      viewCount,
    } = videoDetails

    const name = videoDetails.channel?.name
    const profileImageUrl = videoDetails.channel?.profileImageUrl

    return (
      <DarkModeContext.Consumer>
        {value => {
          const {darkMode} = value
          return (
            <>
              <Header />
              <VideoItemContainer
                darkMode={darkMode}
                data-testid="videoItemDetails"
              >
                <VideoContainer>
                  <ReactPlayer
                    url={videoUrl}
                    height="100%"
                    width="100%"
                    controls
                  />
                </VideoContainer>
                <Title darkMode={darkMode}>{title}</Title>
              </VideoItemContainer>
            </>
          )
        }}
      </DarkModeContext.Consumer>
    )
  }
}

export default VideoItemDetails
