import React, {useContext} from 'react';
import Styled from 'styled-components/native';

import {TodoListContext} from '~/Context/TodoListContext';

const Input=Styled.TextInput`
/* //match_parent */
    width:100%; 
    height:40px;
    padding 0px 8px;
`;

interface Props{
    hideTodoInput:()=>void;
}

const TextInput=({hideTodoInput}:Props)=>{
    const {addTodoList}=useContext<ITodoListContext>(TodoListContext);
    return(
        <Input
            autoFocus={true}
            autoCapitalize="none"
            autoCorrect={false} //true일 시 componentDidMount일 떄 input에 포커스
            placeholder="할 일을 입력한다."
            returnKeyType="done" //리턴 키의 모양을 결정
            onSubmitEditing={({nativeEvent})=>{ //제출 버튼이 눌렸을 떄 
                addTodoList(nativeEvent.text);
                hideTodoInput();
            }}
        />
    );
}

export default TextInput;