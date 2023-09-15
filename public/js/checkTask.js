const checkTask = (taskId) => {
	const checkbox = document.querySelector(`#markTask${taskId}`);
	const checkVal = checkbox.checked;
	const task = taskArray[taskId - 1];
	checkVal ? task.checked = checkVal : task.checked = false;
	const tskId = "task" + taskId;
	const taskBtn = document.querySelector(`#${tskId}`);
	taskBtn.classList.toggle("line-through");
	localStorage.setItem("tasks", JSON.stringify(taskArray));
	location.reload();
}
