const tasksUl = document.querySelector("#tasksUl");

const createTaskHTML = (task) => {
	let checked = "";
	let line = "";
	let select = "";
	let bg = "";

	if (task.checked) {
		checked = "checked";
		line = "line-through"
	}

	if (task.is_selected) {
		select = "checked";
		bg = "bg-blue-400";
	}

	const taskHTML = `
	<li id="taskCont${task.id}" class="flex items-center justify-between p-2 m-2 rounded-xl bg-opacity-80 ${bg}">
		<input type="checkbox" onclick="selectTask(${task.id})" id="selectTask${task.id}" ${select}>
		<button data-target="steps${task.id}" id="task${task.id}" class="${line}">${task.title}</button>
		<div>
			<input type="checkbox" onchange="checkTask(${task.id})" id="markTask${task.id}" ${checked}>
			<button onclick="deleteTask('${encodeURIComponent(JSON.stringify(task))}')" id="deleteTask${task.id}" class="p-2 m-1 rounded-xl bg-red-600 hover:bg-red-500">Delete</button>
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
