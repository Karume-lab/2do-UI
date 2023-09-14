let taskArray = localStorage.getItem("tasks")
? JSON.parse(localStorage.getItem("tasks"))
: [];
let selectedTaskId = "";
let selectedTaskIdArray = [];
let selectedStepIndexArray = [];

const storeTask = (title, description) => {
	const id = taskArray.length;
	const task = {
		id: id,
		title: `${title}`,
		description: `${description}`,
		checked: false,
		is_selected: false,
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
		is_selected: false,
	}
	taskArray[task.id.replace("task", "")].steps.push(step);
	localStorage.setItem("tasks", JSON.stringify(taskArray));
}

const deleteAllTasks = () => {
	localStorage.setItem("tasks", []);
	location.reload();
}

const markAllTasks = () => {
	taskArray.forEach(task => {
		task.checked = true;
	});
	localStorage.setItem("tasks", JSON.stringify(taskArray));
	location.reload();
}

const deleteAllSteps = () => {
	const task = taskArray[selectedTaskId.replace("task", "") - 1];
	task.steps = [];
	localStorage.setItem("tasks", JSON.stringify(taskArray));
	location.reload();
}

const markAllSteps = () => {
	const steps = taskArray[selectedTaskId.replace("task", "") - 1].steps;
	steps.forEach(step => {
		step.checked = true;
	});
	localStorage.setItem("tasks", JSON.stringify(taskArray));
	location.reload();
}

const deleteSelectedTasks = () => {
	const newTaskArray = taskArray.slice(0, taskArray.length);
	const selectedTaskIdArray = []

	selectedTaskArray.forEach(sTask => {
		taskArray.forEach((task, index) => {
			if (sTask === task) {
				selectedTaskIdArray.push(index);
			}
		});
	});

	taskArray.forEach(task => {
		selectedTaskIdArray.forEach((sTask, index) => {
			if (task === taskArray[sTask]) {
				newTaskArray.splice(sTask - index, 1);
			}
			});
	});

	newTaskArray.forEach(task => {
		console.log(task);
	});

	localStorage.setItem("tasks", JSON.stringify(newTaskArray));
	location.reload();
}

const data1 = [{"id":1,"title":"Task 1","description":"Complete assignment","checked":false,"is_selected":false,"steps":[]},{"id":2,"title":"Task 2","description":"Buy groceries","checked":false,"is_selected":false,"steps":[{"description":"sdfsd","checked":false},{"description":"sdfsd","checked":false},{"description":"sdfsd","checked":false},{"description":"sdfsd","checked":false}]},{"id":3,"title":"Task 3","description":"Schedule dentist appointment","checked":false,"is_selected":false,"steps":[]},{"id":4,"title":"Task 4","description":"Call mom","checked":false,"is_selected":false,"steps":[]},{"id":5,"title":"Task 5","description":"Read a book","checked":false,"is_selected":false,"steps":[]}];
// localStorage.setItem("tasks", JSON.stringify(data1));
