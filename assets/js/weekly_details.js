// getting month and year
console.log("weekly");

const date = new Date(); // Replace this with your actual date

const options = { month: "long", year: "numeric" };
const formattedDate = date.toLocaleDateString("en-US", options);

console.log(formattedDate);

document.getElementById("month-name").innerText = formattedDate;

// showing week days using momentjs
var weekDays = document.getElementsByClassName("day-name");
for (let i = 0; i < weekDays.length; i++) {
  const today = new Date();

  const date = new Date(today);
  date.setDate(today.getDate() - i);
  const formattedDate = date.toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
  });

  if (i == 0) {
    weekDays[i].innerText = "Today/" + formattedDate;
    weekDays[i].style.fontWeight = "600";
  } else {
    weekDays[i].innerText = formattedDate;
  }
}
// changing status design of the data i.e(pending,done,not done)
let days = document.getElementsByClassName("days");
days[0].style.fontWeight = "700";
for (let i = 0; i < days.length; i++) {
  days[i].style.color = "white";
  let icon = document.createElement("i");
  icon.classList.add("fa");
  let text = document.createElement("span");
  if (days[i].innerText == "no") {
    days[i].innerText = "";
    icon.classList.add("fa-times");
    days[i].appendChild(icon);
    text.innerText = "Not Done ";
    text.appendChild(icon);
    days[i].appendChild(text);
    days[i].style.backgroundColor = "rgb(242, 118, 109)";
  } else if (days[i].innerText == "yes") {
    days[i].innerText = "";
    icon.classList.add("fa-check");
    days[i].appendChild(icon);
    text.innerText = "Done ";
    text.appendChild(icon);
    days[i].appendChild(text);
    days[i].style.backgroundColor = "rgb(69, 204, 105)";
  } else {
    days[i].innerText = "";
    icon.classList.add("fa-exclamation");
    days[i].appendChild(icon);
    text.innerText = "Pending ";
    text.appendChild(icon);
    days[i].appendChild(text);
    days[i].style.backgroundColor = "rgb(110, 117, 112)";
  }
}
