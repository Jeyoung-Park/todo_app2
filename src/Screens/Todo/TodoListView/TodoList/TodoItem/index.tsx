import React from 'react';
import Styled from 'styled-components/native';

const Container=Styled.View`
    flex-direction:row;
    background-color:#FFF;
    margin:4px 16px;
    padding 8px 16px;
    border-radius:8px;
    align-items:center;
`;

const Label=Styled.Text`
    flex:1;
    margin-left:20px;
`;

const DeleteButton=Styled.TouchableOpacity``;

const Icon=Styled.Image`
    width:24px;
    height:24px;
`;

interface Props{
    text:string;
    onDelete:()=>void;
}

//부모 컴포넌트(TodoList 컴포넌트)로부터 할 일 데이터(text) 하나를 전달받아 화면에 표시
const TodoItem=({text, onDelete}:Props)=>{ //onDelete는 전달받음
    return(
        <Container>
            <Label>{text}</Label>
            <DeleteButton onPress={onDelete}>
                <Icon source={require('~/Assets/Images/remove.png')}/>
            </DeleteButton>
        </Container>
    );
};

export default TodoItem;