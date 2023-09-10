const progressBar = document.querySelector("#progressBar");
const taskDetails = document.querySelector("#taskDetails");

let tasks = taskDetails.childElementCount;
let counter = 0;
for (let task of taskDetails.children) {
	let taskDiv = task.children[1];
	let taskInput = taskDiv.children[0];
	if (taskInput.checked) {
		counter += 1;
	};
}

let perc = Math.floor(counter / tasks * 100);

progressBar.classList.add(`w-[${perc}px]`)
