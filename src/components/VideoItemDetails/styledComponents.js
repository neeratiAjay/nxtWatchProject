import styled from 'styled-components'

export const VideoItemContainer = styled.div`
min-height:100vh;
display:flex;
flex-direction:column;
align-items:center;
background-color:${props => (props.darkMode ? '#0f0f0f' : '#f9f9f9')};
`
export const VideoContainer = styled.div`
background-color:transparent;
height:40vh;
width:100%;
margin-top:30px;
`
export const Title = styled.p`
color:${props => (props.darkMode ? '#ffffff' : '#1e293b')};
font-family:"roboto";
font-weight:500;
font-size:16px;
padding:10px;
`
