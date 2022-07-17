import styled from "@emotion/styled";
import chooseCloth from '../../imgs/chooseCloth.jpg';


export const Intro = styled.div`
position: relative;
width: 600px;
margin: 0 auto;
background-color: gray;
`

export const Paul = styled.img`
animation: disappear 2500ms forwards;

@keyframes disappear {
    0% {opacity: 1}
    80% {opacity:1}
    100% {opacity: 0}
}`

export const Lexy = styled.img`
position: absolute;
top: 0;
left: 0;
opacity: 0;
animation: appear 2800ms forwards 2300ms;

@keyframes appear {
    0% {opacity: 0}
    20% {opacity: 1}
    80% {opacity: 1}
    100% {opacity: 0}
}`

export const ChooseCloth = styled.div`
position: absolute;
top: 0;
left: 0;
background-image: url(${chooseCloth});
width: 100%;
height: 100%;
opacity: 0;
animation: choose 250ms forwards 4800ms;

@keyframes choose {
0% {opacity: 0}
100% {opacity: 1}
}`

export const ButtonBlock = styled.div`
position: absolute;
top: 565px;
left: 40px;
width: 520px;
height: 276px;`

export const Button = styled.button`
&:not(:last-child) {
    margin-right: 20px;
}
`
export const inDress = styled.div`
background-image: url(${chooseCloth});
`