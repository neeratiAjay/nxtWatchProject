/*
import {Component} from 'react'
import Cookies from 'js-cookie'
import {FaFire} from 'react-icons/fa'

import {
  MainContainer,
  TrendingContainer,
  TitleContainer,
  LogoBg,
  TrendingHeading,
  Ulcontainer,
} from './styledComponents'

import NavigationBar from '../NavigationBar'
import Header from '../Header'
import TrendingVideoItem from '../TrendingVideoItems'

import DarkModeContext from '../../context/DarkModeContext'

const initialStatus = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class TrendingContent extends Component {
  state = {trendingData: [], apiStatus: initialStatus.initial}

  componentDidMount() {
    this.getTrendingData()
  }

  formattedData = data => ({
    channel: {
      name: data.channel.name,
      profileImageUrl: data.channel.profile_image_url,
    },
    id: data.id,
    publishedAt: data.published_at,
    thumbnailUrl: data.thumbnail_url,
    title: data.title,
    viewCount: data.view_count,
  })

  getTrendingData = async () => {
    this.setState({apiStatus: initialStatus.inProgress})

    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/trending'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Berear ${jwtToken}`,
      },
    }

    const response = await fetch(url, options)
    if (response.ok === true) {
      const data = await response.json()
      const updatedData = data.videos.map(eachItem =>
        this.formattedData(eachItem),
      )

      this.setState({
        apiStatus: initialStatus.success,
        trendingData: updatedData,
      })
    } else {
      this.setState({apiStatus: initialStatus.failure})
    }
  }
  render() {
    const {trendingData} = this.state
    return (
      <DarkModeContext.Consumer>
        {value => {
          const {darkMode} = value

          return (
            <>
              <Header />
              <MainContainer>
                <NavigationBar />
                <TrendingContainer darkMode={darkMode} data-testid="trending">
                  <TitleContainer darkMode={darkMode}>
                    <LogoBg darkMode={darkMode}>
                      <FaFire color="#ff0b37" size="24" />
                    </LogoBg>
                    <TrendingHeading darkMode={darkMode}>
                      Trending
                    </TrendingHeading>
                  </TitleContainer>
                  <Ulcontainer>
                    {trendingData.map(eachItem => (
                      <TrendingVideoItem
                        itemDetails={eachItem}
                        key={eachItem.id}
                        darkMode={darkMode}
                      />
                    ))}
                  </Ulcontainer>
                </TrendingContainer>
              </MainContainer>
            </>
          )
        }}
      </DarkModeContext.Consumer>
    )
  }
}
export default TrendingContent
*/