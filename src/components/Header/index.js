import React from 'react'
import Cookies from 'js-cookie'
import {Link, withRouter} from 'react-router-dom'
import {FaMoon} from 'react-icons/fa'
import {RiSunLine} from 'react-icons/ri'
import {IoMenu} from 'react-icons/io5'
import {FiLogOut} from 'react-icons/fi'

import DarkModeContext from '../../context/DarkModeContext'

import {
  HeaderDiv,
  HeaderContainer,
  LogoImg,
  Ul,
  Li,
  CustomButton,
  CustomButtonLarge,
  LargeUl,
  ProfileImg,
} from './styledComponents'

const Header = props => {
  return (
    <DarkModeContext.Consumer>
      {value => {
        const {darkMode, changeMode} = value
        const logo = darkMode
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
        const onChangeTheme = () => {
          changeMode()
        }

        const onLogOut = () => {
          const {history} = props
          Cookies.remove('jwt_token')
          history.replace('/login')
        }
        return (
          <HeaderDiv>
            <HeaderContainer darkMode={darkMode} data-testid="header">
              <LogoImg src={logo} alt="website logo" />
              <Ul>
                <Li>
                  <CustomButton
                    type="button"
                    onClick={onChangeTheme}
                    darkMode={darkMode}
                  >
                    {darkMode ? <RiSunLine size="24" /> : <FaMoon size="24" />}
                  </CustomButton>
                </Li>
                <Link to="/login">
                  <Li>
                    <CustomButton darkMode={darkMode}>
                      <IoMenu size="28" />
                    </CustomButton>
                  </Li>
                </Link>
                <Li>
                  <CustomButton darkMode={darkMode} onClick={onLogOut}>
                    <FiLogOut size="28px" />
                  </CustomButton>
                </Li>
              </Ul>
              <LargeUl>
                <Li>
                  <CustomButton
                    type="button"
                    onClick={onChangeTheme}
                    darkMode={darkMode}
                  >
                    {darkMode ? <RiSunLine size="24" /> : <FaMoon size="24" />}
                  </CustomButton>
                </Li>
                <Link to="/login">
                  <Li>
                    <CustomButton darkMode={darkMode}>
                      <ProfileImg
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                        alt="profile"
                      />
                    </CustomButton>
                  </Li>
                </Link>
                <Li>
                  <CustomButtonLarge darkMode={darkMode} onClick={onLogOut}>
                    Logout
                  </CustomButtonLarge>
                </Li>
              </LargeUl>
            </HeaderContainer>
          </HeaderDiv>
        )
      }}
    </DarkModeContext.Consumer>
  )
}
export default withRouter(Header)
