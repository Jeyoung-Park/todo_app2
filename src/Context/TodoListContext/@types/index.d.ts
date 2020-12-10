// 전역에서 타입을 사용하기 위해 Context의 타입을 @types/index.d.ts 파일에 저장

interface ITodoListContext{
    todoList:Array<string>
    addTodoList:(todo:string)=>void;
    removeTodoList:(index:number)=>void;
}