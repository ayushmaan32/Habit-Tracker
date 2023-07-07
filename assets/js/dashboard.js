let days = document.getElementsByClassName("btn-change-status");
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
    days[i].style.backgroundColor = "rgb(242, 110, 100)";
  } else if (days[i].innerText == "yes") {
    days[i].innerText = "";
    icon.classList.add("fa-check");
    days[i].appendChild(icon);
    text.innerText = "Done ";
    text.appendChild(icon);
    days[i].appendChild(text);
    days[i].style.backgroundColor = "rgb(69, 209, 108)";
  } else {
    days[i].innerText = "";
    icon.classList.add("fa-exclamation");
    days[i].appendChild(icon);
    text.innerText = "Pending ";
    text.appendChild(icon);
    days[i].appendChild(text);
    days[i].style.backgroundColor = "rgb(115, 110, 118)";
  }
}
