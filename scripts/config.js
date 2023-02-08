function openPlayerConfig() {
  playerConfigOverlayElement.style.display = "block";
  backdropElement.style.display = "block";
}

function closePlayerConfig() {
  playerConfigOverlayElement.style.display = "none";
  backdropElement.style.display = "none";
  formElement.firstElementChild.classList.remove("error");
  errorsOutputElement.textContent = "";
}

function confirmPlayerConfig() {
  alert("heelo dave");
}

function savePlayerConfig(event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const enteredPlayerName = formData.get("playername").trim();
  //empty string is considered falsey
  if (!enteredPlayerName) {
    // alert("please enter a name")
    event.target.firstElementChild.classList.add("error");
    errorsOutputElement.textContent = "please enter a valid name";
    return;
  }
}
