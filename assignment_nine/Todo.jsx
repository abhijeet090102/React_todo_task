import TodoList from "./TodoLists";
const Todo =()=>{
    const todo = [{
        title: "30 min of walk",
        complete: false
    },
    {
        title: "30 min of Exercise",
        complete: false
    }
        , {
        title: "2 hours of Study",
        complete: true
    }, {
        title: "30 min of coding !",
        complete: true
    }];
    return (
        <>
            {
                todo.map((item,index)=>{
                    return item
                })
            }
        </>
    )
}
export default Todo;