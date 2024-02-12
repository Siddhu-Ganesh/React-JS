import { useState,useReducer } from "react";
function reducer(state, action){
        if(action.type === "add"){
            return [...state,{id: state.length+1, title: action.payload,isCompleted:false}];
        }else if(action.type === "delete"){
          return [...state.filter(Todo=>Todo.id !== action.id)]  
          }else {
            const updatestate=state.map(Todo=>{
              if(Todo.id === action.id){
                return {...Todo, isCompleted: !Todo.isCompleted}

              }else{
                return Todo
              }
          });
          return updatestate;
          }

    }
function Todo() {
    const[TodoName,setTodoName]=useState();
    const [state,dispatch]=useReducer(reducer,[{id:1, title:'Taking react class at 8am ',isCompleted:false}]);
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm">
            <h2 className="text-center">Todo List</h2>
            {state.map(Todo =>(
                <div key={Todo.id} className="my-2">
                    <h3 style={{textDecoration: Todo.isCompleted?'line-through':''}}>{Todo.title}</h3>
                    <button className="btn btn-danger "onClick={() => dispatch({type:'delete', id:Todo.id})}>Delete</button>
                    <button className="btn btn-success mx-2" onClick={()=>dispatch({type:'toggle',id:Todo.id})}>{Todo.isCompleted ? 'In progress':'Complete'}</button>
                </div>

            ))}
        </div>
        <div className="col-sm">
            <h2 className="text-center">Add Todo</h2>
​
            <div className="mb-3">
                <label>Todo Name</label>
                <input type="text" className="form-control" value={TodoName} onChange={(event) =>setTodoName(event.target.value)} placeholder="Todo Name"/>
            </div>
            <button className="btn btn-success" onClick={() => {dispatch({type:'add',payload:TodoName});setTodoName('')}}>Add</button>
        </div>
      </div>
    </div>
  );
}
export default Todo;