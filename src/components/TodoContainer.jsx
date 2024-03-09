const fakeData = [
  { id: 1, task: "task-1" },
  { id: 2, task: "task-2" },
  { id: 3, task: "task-3" },
  { id: 5, task: "task-4" },
  { id:6, task: "task-4" },
  { id: 7, task: "task-4" },
]
import { useState } from "react"
import TodoCard from "./TodoCard"
//rafce => react arror functional component export, shortcut for the snippet
//in our return to ESCAPE the HTML, we use {}

//we use map because we need to return an HTML element so it gets rendered on the dom
function TodoContainer() {
  const [tasks, setTasks] = useState(fakeData) //state for our todo list
  const [formData, setFormdata] = useState({
    task: ""
  })
  //capturing inputs and storing in state via onChange
  function formHandler(e){
    const name = e.target.name
    const value = e.target.value
    const newId = Math.floor(Math.random() *100)
    setFormdata((prev) =>({...prev, id: newId, [name]: value })) //you get the old state, and update with the newest version

  }


  //adds to our tasks state arr which manipulates the todolist  
  function formSubmit(e) {
    e.preventDefault();
    setTasks([...tasks, formData])
    setFormdata({
      task: ""
    })
  }

  return (
    <div> 
     {tasks.map(item => (
        <TodoCard todo={item} key={item.id} />
     ))}

     <form className="border rounded-s p-2 flex flex-col" onChange={formHandler} onSubmit={formSubmit}>
      <label className="font-bold border-b-2" >Add a todo:</label>
      <input 
        type="text"
        className="border my-4 p-2 rounded-sm"
        placeholder="walk the dog"
        name="task"
        value={formData.task}
      />
    
      <button className="bg-blue-500 hover:bg-blue-700 text-white rounded-sm py-2 mt-2 w-1/3">
        Add Todo
      </button>
     </form>
    </div>
  )
}

export default TodoContainer


//version 1
// function TodoContainer() {
//   return (
//     <div> 
//      {fakeData.map(item => (
//       <div key={item.id}>
//         <p>{item.id}: {item.task}</p>
//       </div>
//      ))}
//     </div>
//   )
// }

// export default TodoContainer


//version 2 - with a component
// function TodoContainer() {
  
//   return (
//     <div> 
//      {fakeData.map(item => (
//       <TodoCard todo={item} key={item.id}/>
//      ))}
//     </div>
//   )
// }

//instead of returning just the jsx
//we use PROPS and pass the individual object in this case the item, into our COMPONENT - TodoCard
//todocard then uses the item as the data