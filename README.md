# Exporting Examples
- either way is totally valid, but if you have more than ONE function you're exporting you can't use `export default function name()`

```js
import React from 'react'

 function TodoContainer() {
  return (
    <div>TodoContainer</div>
  )
}

export default TodoContainer

//or

import React from 'react'

export default function TodoContainer() {
  return (
    <div>TodoContainer</div>
  )
}
```

## Commonly used JS higher order array methods 
- `.map()` - returns an array and does some operation or functionality for every item on the array, takes in a callback as the argument
- `.filter()` for like removing things from state


## Props

```js
const fakeData = [
	{ id: 1, task: "task-1" },
	{ id: 2, task: "task-2" },
	{ id: 3, task: "task-3" },
	{ id: 4, task: "task-4" },
];

<TodoCard todo={fakeData[0]} />
```
- the prop is named the todo, and the value is the first object in the fakeData array