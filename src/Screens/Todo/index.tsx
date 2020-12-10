import React from 'react';
import Styled from 'styled-components/native';
import TodoListView from './TodoListView';
import AddTodo from './AddTodo';
import { addons } from 'react-native';

const Container=Styled.View`
    flex:1;    
`;

interface Props{}

const Todo=({}:Props)=>{
    return(
        <Container>
            <TodoListView />
            <AddTodo />
        </Container>
    );
};

export default Todo;