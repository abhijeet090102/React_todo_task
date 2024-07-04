import React, { useState } from "react";
import Todocss from "./Todocss.css";

const TodoList = () => {
    // as a whole to do list showing into the page using useState 
    const [todoList, setTodoList] = useState([{ title: "React learning", complete: false }, { title: "JS learning", complete: false }]);
    // setting the new object inside the array passed by input field and change the list of array 
    const [todoNew, setNewTodo] = useState('');

    // for updating the list of array using useState taking array of updateIndex mean old value and setUpdateIndex new value
    const [updateIndex, setUpdateIndex] = useState(null);
    const [updateTitle, setUpdateTitle] = useState('');

    // change the state of new added task into the array 
    const handleChange = (e) => {
        setNewTodo(e.target.value);
    }
    // adding the new todo task whenever the task added and set the input field as empty
    function add() {
        setTodoList([...todoList, { title: todoNew, complete: false }]);
        setNewTodo('');
        // console.log(todo);
    }
    // updates the list of task of title when function call and title and index is set empty 
    function updat(ind, newTitle) {
        const updateTodo = todoList.map((item, index) =>
            index === ind ? { ...item, title: newTitle } : item
        )
        setTodoList(updateTodo);
        setUpdateTitle('');
        setUpdateIndex(null);
    }
    // set the update title whenever user call the function with index
    function toggleUpdate(inde, title) {
        setUpdateTitle(title);
        setUpdateIndex(inde);
    }
    // handles the changes of update of array of object
    const handleUpdateChange = (e) => {
        setUpdateTitle(e.target.value);
    }
    // deletes the task whenever the function got call this function filter with index of task and deletes the other task 
    const deletes = (index) => {
        setTodoList(todoList.filter((a, i) => i !== index));
    }
    return (
        <> 
        {/* shows the array of object with maping of each object  */}
            <div className="TodotaskWhole">

            {todoList.map((item, index) => {
                return <div className="todolist">
                    <h2>Todo List</h2>
                    <p>Title : {item.title}</p>
            {/* button for choosing the which task title user want to change or update with call the toggleupdate funtion with title parameter  */}
            
                    <button className="buttonEdit" onClick={() => toggleUpdate(index, item.title)}>Edit</button>
                {/* deletes the item when user click the function it will call the deletes funtion with object index */}
                    <button className="buttonDelete" onClick={() => deletes(index)}>Delete</button>
                </div>
            })}

            </div>

            <div className="Amddtasks">
                {/* taking the user input field for adding new task */}
                <input
                    name="todoinput"
                    className="todoAddInput"
                    type="text"
                    value={todoNew} onChange={handleChange}></input>
                    {/* when user hit the button it call the add function and add those title into the array of objects */}
                <button className="addTaskButton" onClick={add}>Add Task</button><br />
            </div>

            <div className="UpdateListTodo">
                {/* updating the todo task it will call the handleUpdateChange function with the value entered by user */}
                <input className="handleUpdate" type="text" value={updateTitle} onChange={handleUpdateChange}></input>
                {/* whenever the hit the button it will call the updat functio with update title and update index */}
                <button className="updateButton" onClick={() => updat(updateIndex, updateTitle)}>Update Task</button>

            </div>
        </>
    );
}
export default TodoList;