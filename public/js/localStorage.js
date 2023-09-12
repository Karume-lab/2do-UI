// localStorage.clear()
// [{"id":0,"title":"sdfsdf","description":"sdfgdfg","checked":false,"steps":[]},{"id":1,"title":"one","description":"one","checked":false,"steps":[]},{"id":2,"title":"two","description":"two","checked":false,"steps":[]},{"id":3,"title":"three","description":"three","checked":false,"steps":[]},{"id":4,"title":"five","description":"five","checked":false,"steps":[]}]

let taskArray = localStorage.getItem("tasks")
? JSON.parse(localStorage.getItem("tasks"))
: [];
let selectedTaskId = "";

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

const storeStep = (description) => {
	const task = document.querySelector(`#${selectedTaskId}`);
	const step = {
		description: `${description}`,
		checked: false,
	}
	taskArray[task.id.replace("task", "")].steps.push(step);
	localStorage.setItem("tasks", JSON.stringify(taskArray));
}
