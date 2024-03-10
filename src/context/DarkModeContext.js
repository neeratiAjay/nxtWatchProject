import React from 'react'

const DarkModeContext = React.createContext({
  darkMode: false,
  changeMode: () => {},
  activeOptionId: 'home',
  changeHome: () => {},
  changeTrending: () => {},
  changeGame: () => {},
  changeSaved: () => {},
})
export default DarkModeContext
