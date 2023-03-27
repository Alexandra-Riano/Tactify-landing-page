const form = document.getElementById("card-form"); // Select the form element
const cardPreview = document.getElementById("card-preview"); // Select the card preview element
const messageInput = document.getElementById("message-input"); // Select the message input element
const imageInput = document.getElementById("image-input"); // Select the image input element
const colorInputs = document.querySelectorAll(".color-input"); // Select all color input elements

function updateCard() {
	cardPreview.innerHTML = "";

	const message = messageInput.value;
	const image = imageInput.value;
	const colors = Array.from(colorInputs).map((input) => input.value);

	const card = document.createElement("div");
	card.classList.add("card");

	const imageWrapper = document.createElement("div");
	imageWrapper.classList.add("image-wrapper");
	imageWrapper.style.backgroundImage = `url('${image}')`;
	card.appendChild(imageWrapper);

	// Create the message element and set the text
	const messageElement = document.createElement("p");
	messageElement.classList.add("message");
	messageElement.innerText = message;
	card.appendChild(messageElement);

	// Create the color wrapper element and add each color
	const colorWrapper = document.createElement("div");
	colorWrapper.classList.add("color-wrapper");
	colors.forEach((color) => {
		const colorElement = document.createElement("div");
		colorElement.classList.add("color");
		colorElement.style.backgroundColor = color;
		colorWrapper.appendChild(colorElement);
	});
	card.appendChild(colorWrapper);

	cardPreview.appendChild(card);
}

form.addEventListener("submit", (event) => {
	event.preventDefault();
	updateCard();
});

for (const colorInput of colorInputs) {
	colorInput.addEventListener("input", updateCard);
}
