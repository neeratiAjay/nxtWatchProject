import {Component} from 'react'

import {Route, Switch} from 'react-router-dom'

import DarkModeContext from './context/DarkModeContext'

import Login from './components/Login'
import Home from './components/Home'
import TrendingContent from './components/Trending'

import VideoItemDetails from './components/VideoItemDetails'
import ProtectedRoute from './components/Protect'

import './App.css'

// Replace your code here
class App extends Component {
  state = {darkMode: false, activeOptionId: 'home'}

  changeTheme = () => {
    this.setState(prev => ({darkMode: !prev.darkMode}))
  }
  changeOptionHome = () => {
    this.setState({activeOptionId: 'home'})
  }

  changeOptionTrending = () => {
    this.setState({activeOptionId: 'trending'})
  }

  changeOptionGaming = () => {
    this.setState({activeOptionId: 'gaming'})
  }

  changeOptionSaved = () => {
    this.setState({activeOptionId: 'savedVideos'})
  }

  render() {
    const {darkMode, activeOptionId} = this.state

    return (
      <DarkModeContext.Provider
        value={{
          darkMode,
          changeMode: this.changeTheme,
          activeOptionId,
          changeHome: this.changeOptionHome,
          changeTrending: this.changeOptionTrendinig,
          changeGame: this.changeOptionGaming,
          changeSaved: this.changeOptionSaved,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <ProtectedRoute exact path="/trending" component={TrendingContent} />
        </Switch>
      </DarkModeContext.Provider>
    )
  }
}

export default App
//  <ProtectedRoute exact path="/gaming" component={GamingContent} />
