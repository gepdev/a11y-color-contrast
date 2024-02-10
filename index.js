const element = document.querySelector(".content");
const range = document.querySelectorAll(".range");

function setDataVal(element) {
	element.setAttribute("data-value", element.value);
}

for (let i = 0; i < range.length; i++) {
	const rangeItem = range[i];
	const initialRangeValue = parseInt(
		getComputedStyle(element).getPropertyValue("--" + rangeItem.name)
	);
	console.log(initialRangeValue);

	rangeItem.value = initialRangeValue;
	setDataVal(rangeItem);

	rangeItem.addEventListener("input", function () {
		element.style.setProperty("--" + this.name, this.value);
		setDataVal(this);
	});
}
