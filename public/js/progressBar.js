const progressBar = document.querySelector("#progressBar");
const taskDetails = document.querySelector("#taskDetails");

let tasks = taskDetails.childElementCount;
let counter = 0;
for (let task of taskDetails.children) {
	let taskDiv = task.children[2];
	let taskInput = taskDiv.children[0];
	if (taskInput.checked) {
		counter += 1;
	};
}

let perc = Math.floor(counter / tasks * 100);
let pixels = Math.floor(perc * 384 / 100);

console.log(perc, pixels);
let cls = `w-[${pixels}px]`;
console.log(cls)

let bg = "bg-";

if (perc >= 90) {
	bg += "green-600";
} else if (perc >= 70) {
	bg += "orange-600";
} else if (perc >= 50) {
	bg += "orange-700";
} else if (perc >= 40) {
	bg += "yellow-600";
} else{
	bg += "red-600";
}

console.log(bg);

progressBar.classList.add(`w-[${pixels}px]`);
progressBar.classList.add(`${bg}`);
