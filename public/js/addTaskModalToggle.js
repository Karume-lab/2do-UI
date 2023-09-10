const modalBtns = document.querySelectorAll("button[data-target]");

modalBtns.forEach(button => {
button.addEventListener("click", () => {
	const target = button.dataset.target;
	const modal = document.getElementById(target);
	const closeButtons = modal.querySelectorAll(`[data-target="${target}"]`);

	modal.classList.remove("hidden");
	modal.classList.add("flex");

	closeButtons.forEach(closeButton => {
	closeButton.addEventListener("click", () => {
		modal.classList.add("hidden");
	});
	});
});
});
