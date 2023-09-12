const tasksUl = document.querySelector("#tasksUl");

const createTaskHTML = (task) => {
	if (task.checked) {
		var checked = "checked";
		var line = "line-through"
	} else {
		checked = "";
		line = "";
	}

	const taskHTML = `
	<li class="flex items-center justify-between">
		<input type="checkbox">
		<button data-target="steps${task.id}" id="task${task.id}" class="${line}">${task.title}</button>
		<div>
			<input type="checkbox" onchange="checkTask(${task.id})" id="markTask${task.id}" ${checked}>
			<button onclick="deleteTask(${task.id})" id="deleteTask${task.id}" class="p-2 m-1 rounded-xl bg-red-600 hover:bg-red-500">Delete</button>
		</div>
	</li>
	`
	return taskHTML;
}

const displayTasksHTML = (taskArray) => {
	let displayHTML = "";
	taskArray.forEach(task => {
		displayHTML += createTaskHTML(task);
	});
	return displayHTML;
}

tasksUl.innerHTML = displayTasksHTML(taskArray);

const addTask = () => {
	const title = document.querySelector("#taskTitle").value;
	const description = document.querySelector("#taskDescription").value;
	storeTask(title, description);
	displayTasksHTML(taskArray);
	location.reload();
}
