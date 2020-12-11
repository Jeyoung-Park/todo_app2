import React from 'react';
import Styled from 'styled-components/native';

const Container=Styled.SafeAreaView`
    position:absolute;
    bottom:0;
    align-self:center;
    justify-content:flex-end;
    margin-bottom: 20px;
`;

const ButtonContainer=Styled.TouchableOpacity`
/* offset-x | offset-y | blur-radius | color */
    box-shadow: 4px 4px 8px #999;
`;

const Icon=Styled.Image`
    width: 50px;
    height: 50px;
`;

interface Props{
    onPress?:()=>void;
}

const AddButton =({onPress}:Props)=>{
    return(
        <Container>
            <ButtonContainer onPress={onPress}>
                <Icon source={require('~Assets/Images/add.png')}/>
            </ButtonContainer>
        </Container>
    );
};

export default AddButton;