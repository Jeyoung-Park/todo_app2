//Context를 사용하기 위한 Provider 설정
//Provider는 공유할 컴포넌트들의 최상단 공통 부모 컴포넌트에 사용

import React from 'react';
import Styled from 'styled-components/native';

// 앞에서 만든 COntext에서 프로바이더 컴포넌트를 불러와 최상단 공톤 부모 컴포넌트에서 사용 -> App.tsx 컴포넌트를 부모로 하는 모든 컴포넌트에서 할 일 리스트의 Context를 사용 가능
import {TodoListContextProvider} from '~/Context/TodoListContext';

import Todo from './Screens/Todo';

const Container=Styled.View`
  flex: 1;
  background-color: #EEE;  
`;

const App=()=>{
  return(
    <TodoListContextProvider>
      <Container>
        <Todo />
      </Container>
    </TodoListContextProvider>
  );
};

export default App;