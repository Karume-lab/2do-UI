let taskArray = localStorage.getItem("tasks")
? JSON.parse(localStorage.getItem("tasks"))
: [];

const storeTask = (title, description) => {
const id = taskArray.length;
const task = {
	id: id,
	title: `${title}`,
	description: `${description}`,
	checked: false,
	steps: [],
};

taskArray.push(task);
localStorage.setItem("tasks", JSON.stringify(taskArray));
};

const getTask = () => {};

const getSteps = () => {};

`
fetch all tasks
get task
store to local storage
update local storage

`;
