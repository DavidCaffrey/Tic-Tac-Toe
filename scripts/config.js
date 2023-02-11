function openPlayerConfig(event) {
  editedPlayer = +event.target.dataset.playerid;
  playerConfigOverlayElement.style.display = "block";
  backdropElement.style.display = "block";
}

function closePlayerConfig() {
  playerConfigOverlayElement.style.display = "none";
  backdropElement.style.display = "none";
  formElement.firstElementChild.classList.remove("error");
  errorsOutputElement.textContent = "";
  formElement.firstElementChild.lastElementChild.value = "";
}

// function confirmPlayerConfig() {

// }

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

  const updatedPlayerDataElement = document.getElementById(
    "player-" + editedPlayer + "-data"
  );
  updatedPlayerDataElement.children[1].textContent = enteredPlayerName;

  players[editedPlayer - 1].name = enteredPlayerName;
  // updatedPlayerDataElement.firstChild.nextSibling = enteredPlayerName;
  // players[editedPlayer - 1].name = enteredPlayerName;

  closePlayerConfig();
}
