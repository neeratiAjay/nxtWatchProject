import styled from 'styled-components'

export const HeaderDiv = styled.div`
height:12vh;
`
export const HeaderContainer = styled.div`
background-color:${props => (props.darkMode ? '#231f20' : '#ffffff')};
height:12vh;
min-width:100vw;
margin-bottom:0px;
position:fixed;
display:flex;
flex-direction:row;
justify-content:space-between;
align-items:center;

`
export const Div = styled.div`
width:100vw;
display:flex;
align-items:center;
justify-content:space-between;
`
export const LogoImg = styled.img`
height:30px;
width:120px;
margin-left:20px;
`
export const Ul = styled.ul`
width:100%;
padding:0px;
margin-left:50px;
list-style:none;
display:flex;
align-items:center;
display:flex;
@media screen and (min-width:768px){
display:none;
}
`
export const Li = styled.li`
text-decoration:none;
margin-left:10px;
`

export const CustomButton = styled.button`
background-color:transparent;
outline:none;
cursor:pointer;
border:none;
color:${props => (props.darkMode ? '#ffffff' : '#000000')}
`
export const LargeUl = styled.ul`
width:100%;
list-style:none;
display:flex;
align-items:center;
display:none;
@media screen and (min-width:768px){
display:flex;
}
`
export const CustomButtonLarge = styled.button`
color:${props => (props.darkMode ? '#ffffff' : '#3b82f6')};
border:1.5px solid  ${props => (props.darkMode ? '#ffffff' : '#3b82f6')};
height:35px;
width:120px;
text-align:center;
font-family:"Roboto";
background-color:transparent;
border-width:bold;
font-weight:bold;
font-size:16px;
border-radius:4px;
`
export const ProfileImg = styled.img`
height:30px;
width:30px;
margin-left:10px;
margin-right:10px;
`
