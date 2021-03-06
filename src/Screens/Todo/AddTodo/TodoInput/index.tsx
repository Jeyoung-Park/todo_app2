import React from 'react';
import Styled from 'styled-components/native';

import Background from './Background';
import TextInput from './TextInput';

const Container=Styled.KeyboardAvoidingView`
/* //독립된 배치 문맥 */
    position:absolute; 
    top:0;
    bottom:0;
    left:0;
    right:0;
    /* //아이템들을 끝으로 정렬 */
    justify-content:flex-end; 
`;

interface Props{
    hideTodoInput:()=>void;
}

const TodoInput=({hideTodoInput}:Props)=>{
    return(
        // keyboardAvoidingView의 behavior: 키보드가 어떻게 보일지를 결정하는 속성
        <Container behavior="padding">
            <Background onPress={hideTodoInput}/>
            <TextInput hideTodoInput={hideTodoInput}/>
        </Container>
    );
}

export default TodoInput; 