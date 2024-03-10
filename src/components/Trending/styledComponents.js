
import styled from 'styled-components'

export const MainContainer = styled.div`
@media screen and (min-width:768px){
    display:flex;
}
`
export const TrendingContainer = styled.div`
background-color:${props => (props.darkMode ? '#0f0f0f' : '#f9f9f9')};
display:flex;
min-height:100vh;
flex-direction:column;
align-items:center;
@media screen and (min-width:768px){
    width:75vw;
   
}
`
export const TitleContainer = styled.div`
display:flex;
align-items:center;
background-color:${props => (props.darkMode ? '#181818' : '#ebebeb')};
border:none;
border-radius:8px;
margin:10px;
padding:10px;
margin-top:10px;
width:98%;
height:80px;
padding-bottom:10px;
border-top-right-radius:0;
border-bottom-right-radius:0;
border-right-height:0px;
border-right-style:solid;
border-right-color:#7e858e;
`
export const LogoBg = styled.div`
background-color:${props => (props.darkMode ? '#0f0f0f' : '#cbd5e1')};
height:45px;
width:45px;
border:none;
border-radius:100%;
display:flex;
justify-content:center;
align-items:center;
`
export const TrendingHeading = styled.h1`
font-family"roboto";
font-weight:bold;
font-size:24px;
padding-left:20px;
color:${props => (props.darkMode ? '#ffffff' : '#1e293b')};
`
export const Ulcontainer = styled.ul`
list-style:none;
display:flex;
flex-direction:column;
width:100%;
padding:0;
margin:0;
`

