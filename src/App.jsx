import "./App.css";
import TodoContainer from "./components/TodoContainer";
import TodoCard from "./components/TodoCard";
const fakeData = [
	{ id: 1, task: "task-1" },
	{ id: 2, task: "task-2" },
	{ id: 3, task: "task-3" },
	{ id: 4, task: "task-4" },
];
//gateway to house other components or pages

//every react component is a function
//two purpose
//the logic
//the return => returns HTML (JSX a subset of html)
//can only return ONE html element
function App() {
	return (
		<>
			<main>
				<h1>ToDo List</h1>
				<TodoContainer />
				<h2>ToD list with props example- this dont' scale</h2>
				<TodoCard todo={fakeData[0]} />
				<TodoCard todo={fakeData[1]} />
				<TodoCard todo={fakeData[2]} />
				<TodoCard todo={fakeData[3]} />
			</main>
		</>
	);
}

export default App;

//data flows in one direction from top to bottom
//Main - top => root of that index.html
////APP - 2nd => imported to main, data lives in app, pass to our child componet => todocard
//////ToDOcontainer and TodoCard => components on our app