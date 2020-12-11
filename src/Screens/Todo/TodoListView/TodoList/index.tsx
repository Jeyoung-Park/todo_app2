// 함수형 컴포넌트에서 Context를 사용하기 위해서는 리액트 훅의 useContext 사용해야 함, 사용하고자 하는 context를 초기값으로 설정하고 해당 context에서 사용하고자 하는 값들을 불러와 사용 ㄱㄴ
import React, {useContext} from 'react';
import {FlatList} from 'react-native'; //리액트 네이티브 리스트뷰
import Styled from 'styled-components/native';

import {TodoListContext} from '~/Context/TodoListContext';

import EmptyItem from './EmptyItem';
import TodoItem from './TodoItem';

const Container=Styled(FlatList)`
`;

interface Props {}

const TodoList=({}:Props)=>{
    const {todoList, removeTodoList}=useContext<ITodoListContext>(TodoListContext); //앞서 만든 TodoListContext를 초기 Context로 설정, todoList와 removeTodoList를 불러옴
    return(
        <Container
            data={todoList}//리스트뷰에 표시할 데이터의 배열
            // 반복적으로 동일한 컴포넌트를 사용하는 경우 컴포넌트에 키 값 설정해주어야 함; -> keyExtractor는 FlatList에서 반복적으로 표시되는 Item에 키 값을 설정해줌
            keyExtractor={(item, index)=>{
                return `todo-${index}`;
            }}
            ListEmptyComponent={<EmptyItem />} //주어진 배열에 데이터가 없을 경우 표시되는 컴포넌트
            renderItem={({item, index})=>( //주어진배열에 데이터를 사용하여 반복적으로 표사될 컴포넌트
                <TodoItem 
                    text={item as string}
                    onDelete={()=>removeTodoList(index)}
                />
            )}
            contentContainerStyle={todoList.length===0&&{flex:1}} 
        />
    );
}

export default TodoList;