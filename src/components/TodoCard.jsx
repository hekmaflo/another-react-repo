

export default function TodoCard ({ todo }){

 // console.log(todo); when it doubt log it out
  return (
    <div>
      <p>{todo.id}: {todo.task}</p>
    </div>
  )
}



//not destructring way kinda verbose
// export default function TodoCard (props){
//   console.log(props.todo);
//   return (
//     <div>
//       <p>{props.todo.id}: {props.todo.task}</p>
//     </div>
//   )
// }
