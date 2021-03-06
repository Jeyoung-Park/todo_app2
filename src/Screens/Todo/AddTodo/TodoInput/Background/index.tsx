import React from 'react';
import { BaseKeyboardEvent, TouchableWithoutFeedback, ViewPagerAndroid } from 'react-native';
import Styled from 'styled-components/native';

// TouchableWithoutFeedback: 눌렀을 때 응답 x
const Container = Styled.TouchableWithoutFeedback`
    width:100px;
    height:40px;
    background-color:#FFF;
    /* //상하 좌우 padding 지정 */
    padding: 0px 8px; 
`;

const BlackBackground=Styled.View`
    background-color:#000;
    opacity:0.3;
    width:100%;
    height:100%;
`;

interface Props{
    onPress:()=>void;
}

const Background=({onPress}:Props)=>{
    return(
        <Container onPress={onPress}>
            <BlackBackground />
        </Container>
    );
};

export default Background;