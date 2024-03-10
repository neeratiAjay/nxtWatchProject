import {Component} from 'react'
import Cookies from 'js-cookie'
import {IoIosClose} from 'react-icons/io'

import {IoSearchOutline} from 'react-icons/io5'
import Header from '../Header'
import NavigationBar from '../NavigationBar'
import VideoItem from '../VideoItem'
import DarkModeContext from '../../context/DarkModeContext'

import {
  MainHomeContainer,
  HomeContainer,
  SearchInput,
  Label,
  SearchBtn,
  DisplayFlexContainer,
  Ul,
  BannerContainer,
  BannerFlexContainer,
  BannerLogo,
  BannerCloseBtn,
  BannerText,
  BannerBtn,
} from './styledComponents'

const initialStatus = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    searchInput: '',
    apiStatus: initialStatus.initial,
    videosData: [],
    showBanner: true,
  }

  componentDidMount() {
    this.getVideoData()
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
  getVideoData = async () => {
    const {searchInput} = this.state
    this.setState({apiStatus: initialStatus.inProgress})

    const jwtToken = Cookies.get('jwt_token')

    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Berear ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)

    const data = await response.json()

    if (response.ok === true) {
      const updatedData = data.videos.map(eachItem =>
        this.formattedData(eachItem),
      )
      this.setState({apiStatus: initialStatus.success, videosData: updatedData})
    } else {
      this.setState({apiStatus: initialStatus.failure})
    }
  }

  closeBanner = () => {
    this.setState({showBanner: false})
  }

  changeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickSearch = () => {
    this.getVideoData()
  }

  render() {
    const {searchInput, videosData, showBanner} = this.state
    return (
      <DarkModeContext.Consumer>
        {value => {
          const {darkMode} = value
          const logo = darkMode
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          return (
            <>
              <Header />
              <MainHomeContainer>
                <NavigationBar />
                <HomeContainer darkMode={darkMode} data-testid="home">
                  {showBanner && (
                    <BannerContainer>
                      <BannerFlexContainer>
                        <BannerLogo src={logo} alt="nxt watch logo" />
                        <BannerCloseBtn
                          type="button"
                          onClick={this.closeBanner}
                        >
                          <IoIosClose size="30" />
                        </BannerCloseBtn>
                      </BannerFlexContainer>
                      <BannerText>
                        Buy Nxt Watch Premium prepaid plans with UPI
                      </BannerText>
                      <BannerBtn>GET IT NOW</BannerBtn>
                    </BannerContainer>
                  )}
                  <DisplayFlexContainer>
                    <SearchInput
                      darkMode={darkMode}
                      type="search"
                      placeholder="Search"
                      id="homeSearch"
                      onChange={this.changeSearchInput}
                      value={searchInput}
                    />
                    <Label htmlFor="homeSearch">
                      <SearchBtn
                        type="button"
                        onClick={this.onClickSearch}
                        darkMode={darkMode}
                      >
                        {' '}
                        <IoSearchOutline size="18" />{' '}
                      </SearchBtn>
                    </Label>
                  </DisplayFlexContainer>
                  <Ul>
                    {videosData.map(eachItem => (
                      <VideoItem
                        key={eachItem.id}
                        itemDetails={eachItem}
                        darkMode={darkMode}
                      />
                    ))}
                  </Ul>
                </HomeContainer>
              </MainHomeContainer>
            </>
          )
        }}
      </DarkModeContext.Consumer>
    )
  }
}
export default Home
