const overlayShow = document.getElementById("overlay");
const noteTextarea = document.getElementById("note");
const errorMsg = document.getElementById("error_msg");
const addBtn = document.getElementById("add");
const closeBtn = document.getElementById("close");
const plusBtn = document.getElementById("plus_btn");
const cardsContainer = document.getElementById("cards_container");

let options = {
		timeZone: "Europe/London",
		year: "numeric",
		month: "numeric",
		day: "numeric",
	},
	formatter = new Intl.DateTimeFormat([], options);

let dataDate = formatter.format(new Date());

function getRandomColor() {
	color = "hsl(" + Math.random() * 360 + ", 100%, 75%)";
	return color;
}

plusBtn.addEventListener("click", plusBtnClick);
function plusBtnClick() {
	overlayShow.style.display = "block";
}

closeBtn.addEventListener("click", closeBtnClick);
function closeBtnClick() {
	overlayShow.style.display = "none";
}

addBtn.addEventListener("click", () => {
	closeBtnClick();

	// creating element in the dom start here

	const newNoteEl = document.createElement("div");
	newNoteEl.classList = "cards";

	const paragraphEl = document.createElement("p");
	paragraphEl.classList = "main_text";

	const paragraphEl2 = document.createElement("p");
	paragraphEl2.classList = "date";

	// appending the textarea value and date value created above to the new div(cards) creared with javascript.
	paragraphEl.innerText = noteTextarea.value;
	paragraphEl2.innerText = dataDate;
	newNoteEl.append(paragraphEl, paragraphEl2);
	cardsContainer.append(newNoteEl);

	// creating element in the dom ends here

	// we are trying to insert every value entered by user, we want them to be displayed inside the new div(cards) created by javascript.

	// Array of textvalue.

	let inputDetails = {
		textEl: noteTextarea.value,
		dateEl: dataDate,
		backgroundColor: getRandomColor(),
	};

	console.log(inputDetails);
	// newNoteEl.textContent = noteTextarea.value;

	// newNoteEl.textContent = `${textEl} : ${dateEl}`;
	newNoteEl.style.backgroundColor = getRandomColor();

	noteTextarea.value = "";
});
