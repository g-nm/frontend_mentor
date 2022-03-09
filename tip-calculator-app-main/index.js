const form = document.querySelector("form");
const custom = document.querySelector(".custom");
const radiobuttons = document.querySelectorAll("[name=percentage]");
const tip_amount = document.querySelector(".tip__amount");
const total_amount = document.querySelector(".total__amount");
const reset = document.querySelector("[type=reset]");

function setValidityError(event) {
	try {
		const isValid = event.target.validity.valid;
		const validationMessage = event.target.validationMessage;
		const validationId = event.target.getAttribute("aria-describedby");
		const validationComponent = validationId
			? document.getElementById(validationId)
			: false;

		if (!isValid && validationMessage && validationComponent) {
			event.target.style.setProperty(
				"outline",
				"2px solid rgba(231, 53, 8, 0.904)"
			);
			if (event.target.validity.rangeUnderflow) {
				validationComponent.innerText = "Can't be zero";
			} else {
				validationComponent.innerText = validationMessage;
			}
		} else {
			validationComponent.innerText = "";
			event.target.style.setProperty("outline", "none");
		}
	} catch (error) {
		// console.log(error);
	}
}

function calculateTotals(event) {
	const result = form.checkValidity();
	reset.removeAttribute("disabled");
	if (!result) {
		return;
	}

	const bill__amount = document.querySelector(".bill__amount").value;
	const percentage = getPercentage();
	// get percentage
	const people = document.querySelector(".people").value;
	// get number of people
	const total = (
		(parseInt(percentage) / 100) *
		parseFloat(bill__amount)
	).toFixed(2);
	const tipamountperperson = (total / parseInt(people)).toFixed(2);
	tip_amount.innerText = tipamountperperson;
	total_amount.innerText = total;
}
function getPercentage() {
	const percentage =
		document.querySelector("input:checked")?.value ?? custom.value;

	return percentage;
}

form.addEventListener("reset", () => {
	const alerts = document.querySelectorAll(".alert");
	const inputswitharia = document.querySelectorAll("[aria-describedby]");
	inputswitharia.forEach((input) => {
		input.style.setProperty("outline", "none");
	});
	alerts.forEach((alert) => {
		alert.innerText = "";
	});
});
custom.addEventListener(
	"input",
	() => {
		Array.from(radiobuttons).forEach((button) => {
			button.checked = false;
			button.removeAttribute("required");
		});
		custom.setAttribute("required", "true");
		tip_amount.innerText = 0.0;
		total_amount.innerText = 0.0;
	},
	true
);
Array.from(radiobuttons).forEach((radiobutton) =>
	radiobutton.addEventListener("change", (e) => {
		custom.removeAttribute("required");
		radiobutton.setAttribute("required", "true");
		custom.value = null;
	})
);

form.addEventListener("input", calculateTotals);
document.addEventListener("blur", setValidityError, true);
