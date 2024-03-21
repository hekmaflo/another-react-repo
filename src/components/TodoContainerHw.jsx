import React, { useState } from "react";

const myData = [
  { id: 1, task: "input more taks" },
  { id: 2, task: "input even more taks" },
];

function TodoContainerHw() {
  const [data, setData] = useState(myData);

  return (
    <div>
      <h1>ToDo list</h1>
      {myData.map((data) => {
        return <div key={data.id}>{data.task}</div>;
      })}

      <form action="">
        <input type="text" name="task" placeholder="text here" />
        <input type="text" name="task" placeholder="text here" />
        <button>Add task</button>
      </form>
    </div>
  );
}

export default TodoContainerHw;
