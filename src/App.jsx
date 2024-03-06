import "./App.css";
import { useState } from "react"; //hook => helper funcs to do react-y things
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
	//state = data
	const [count, setCount] = useState(0) //returns an array thats two items , array destructring
	//initial state is set when you pass in an argument to the useState()
	//best practice for naming state, is after the resource. i.e [dogs, setDogs]
	//useState returns an arr of two items, the current state will always be first, the setter function
	//current state = data in that moment
	//setter function = function that will UPDATE with something new, causing a rerender, anytime you call the setState function it will always re-render

	function increaseCount() {
		console.log('button working');
		//to update our count, we need to use the setter function
		setCount(count + 1) //hey this is a setState func, im going to compare the last => to the current and rerender if it's different
	
	}
	console.log(count);

	return (
		<>
			<main>
				<div>
					<h1>Counter</h1>
					{count}
					<button onClick={increaseCount}>Increment</button>
				</div>
				<h2>ToDo List</h2>
				<TodoContainer />
				<h3>ToD list with props example- this dont' scale</h3>
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