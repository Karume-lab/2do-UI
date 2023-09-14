const selectTask = (taskId) => {
	const sTask = document.querySelector(`#selectTask${taskId}`);
	const tId = sTask.id.replace("selectTask", "") - 1;
	const task = taskArray[tId]

	task.is_selected = sTask.checked;
	
	const taskLi = document.querySelector(`#task${taskId}`).parentElement;
	taskLi.classList.toggle("bg-blue-400");
	const taskNoSpan = document.querySelector("#selectedTasksNo");

	if (selectedTaskArray.length > 0) {
		taskNoSpan.innerHTML = selectedTaskArray.length;
		taskNoSpan.classList.add("p-2");
	} else {
		taskNoSpan.innerHTML = "";
		taskNoSpan.classList.remove("p-2");
	}

	localStorage.setItem("tasks", JSON.stringify(taskArray));
	location.reload();
}
