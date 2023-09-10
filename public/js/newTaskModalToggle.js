const addTask = document.querySelector("#addTask");
const addTaskModal = document.querySelector("#addTaskModal");

addTask.addEventListener("click", () => {
	addTaskModal.classList.remove("hidden");
});
