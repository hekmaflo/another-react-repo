import "./App.css";
import TodoContainer from "./components/TodoContainer";
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
			</main>
		</>
	);
}

export default App;
