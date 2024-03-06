const fakeData = [
  { id: 1, task: "task-1" },
  { id: 2, task: "task-2" },
  { id: 3, task: "task-3" },
  { id: 5, task: "task-4" },
  { id:6, task: "task-4" },
  { id: 7, task: "task-4" },
]
import TodoCard from "./TodoCard"
//rafce => react arror functional component export, shortcut for the snippet
//in our return to ESCAPE the HTML, we use {}

//we use map because we need to return an HTML element so it gets rendered on the dom
function TodoContainer() {
  
  return (
    <div> 
     {fakeData.map(item => (
      <TodoCard todo={item} key={item.id} />
     ))}
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