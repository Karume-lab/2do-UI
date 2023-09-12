const modalBtns = document.querySelectorAll("button[data-modal]");

modalBtns.forEach(button => {
	button.addEventListener("click", () => {
		const modalId = button.dataset.modal;
		const modal = document.querySelector(`#${modalId}`);
		const closeButtons = modal.querySelectorAll(`[data-modal="${modalId}"]`);

		modal.classList.remove("hidden");
		modal.classList.add("flex");

		closeButtons.forEach(closeButton => {
			closeButton.addEventListener("click", () => {
				modal.classList.add("hidden");
			});
		});
	});
});
