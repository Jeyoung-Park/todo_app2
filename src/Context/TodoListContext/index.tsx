import React, {createContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
                                 
interface Props{
    children:JSX.Element|Array<JSX.Element>;
}

// context생성, createContext 함수에 초기값을 할당
const TodoListContext=createContext<ITodoListContext>({
    todoList:[],
    addTodoList:(todo:string):void=>{}, //초기값으로 빈 함수 할당, 추후에 Context의ㅏ 프로바이더 컴포넌트에서 구현
    removeTodoList:(index:number):void=>{}
});

const TodoListContextProvider=({children}:Props)=>{
    // Context Provider 컴포넌트에서 useState를 이용하여 문자열 배열의 할 일 리스트를 선언하고 이 데이터를 setTodoList 함수를 통해 추가하거나 삭제
    const [todoList, setTodoList]=useState<Array<string>>([]);

    // 할 일 리스트에 할 일을 추가하기 위한 함수 
    const addTodoList=(todo:string):void=>{
        const list=[...todoList, todo]; //새로운 list 변수를 생성하여 todoList의 모든 데이터 삽입(todoList는 불변이기 때문) + 매개변수로 전달받은 todo 삽입
        setTodoList(list); //setTodoList를 통해 state 값을 변경
        AsyncStorage.setItem('todoList', JSON.stringify(list)); //asyncstorage에 저장 (key:value) 형태로 저장됨
    };

    const removeTodoList=(index:number):void=>{
        let list=[...todoList]; //todoList가 state 값이므로 직접 변경 불가 => todoList를 복사하여 새로운 배열 생성
        list.splice(index, 1); //매개변수를 list에서 삭제하고
        setTodoList(list); //setTodoList를 통해 새로운 state 저장
        AsyncStorage.setItem('todoList', JSON.stringify(list));
    };
// 앱이 시작될 떄 asyncStorage에 저장된 데이터를 불러와 Context의 값을 초기화하기 위한 함수
    const initData=async()=>{
        try{
            const list=await AsyncStorage.getItem('todoList');
            if(list !== null){
                setTodoList(JSON.parse(list));//asynchstorage에 저장된 값은 문자열이므로 이 데이터를 JSON.parse 함수를 이용해 문자열 배열로 변경
            }
        }catch(e){
            console.log(e);
        }
    };

    // useEffect의 첫 번째 매개변수: 함수를 설정 ->useEffect의 역할 정의 
    // useEffect의 두 번째 매개변수: 배열을 전달 
    useEffect(()=>{
        initData();
    }, []); //두 번째 매개변수로 빈 배열 사용->클래스형 컴포넌트 componentDidMount와 같은 역할 수행->컴포넌트가 처음 화면에 표시될 떄 한 번 호출
    // 두 번째 매개변수가 비어 있는 경우 -> 컴포넌트가 처음 화면에 나타난 후 + Props나 state가 변경될 떄 호출 componentDidUpdate와 같은 역할
    // useEffect에서 함수를 리턴하는 경우 -> 컴포넌트가 화면에서 사라진 후 호출(ex. 라이브러리의 연동 해제 or 타이머 해제) componentWillUnmount와 같은 역할
    // 두 번째 매개변수로 배열이 전달된 경우 -> 전달된 배열의 변수가 변경될 때 호출
    return(
        <TodoListContext.Provider
            value={{
                todoList, addTodoList, removeTodoList
            }}>
                {children}
        </TodoListContext.Provider>
    );
};

//Context를 제공하기 위해 export
export {TodoListContextProvider, TodoListContext};