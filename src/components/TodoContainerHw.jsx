import React, { useState } from "react";

const myData = [
  { id: 1, task: "input more task", date: "03/10/23" },
  { id: 2, task: "input even more task", date: "03/11/23" },
];

function TodoContainerHw() {
  const [data, setData] = useState(myData);
  const [form, setForm] = useState({ id: "", task: "", date: "" });

  function changeHandler(event) {
    const name = event.target.name;
    const value = event.target.value;
    setForm((prev) => ({ ...prev, [name]: value }));
  }
  console.log(form);

  function submitHandler(e) {
    e.preventDefault();
    setData([...data, form]);
    setForm({ id: "", task: "", date: "" });
  }

  return (
    <div>
      <h1>ToDo list</h1>
      {data.map((data) => {
        return (
          <div key={data.id}>
            <p>{data.task}</p>
            <p>{data.date}</p>
          </div>
        );
      })}

      <form action="" onSubmit={submitHandler}>
        <label htmlFor="">What to do?:</label>
        <input
          onChange={(event) => changeHandler(event)}
          type="text"
          name="task"
          value={form.task}
          placeholder="text here"
        />
        <label htmlFor="">What to date?:</label>
        <input
          onChange={(event) => changeHandler(event)}
          type="text"
          name="date"
          value={form.date}
          placeholder="text here"
        />
        <button>Add task</button>
      </form>
    </div>
  );
}

export default TodoContainerHw;
//delete a task
