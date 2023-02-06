const editPlayer1Btn = document.getElementById("edit-player-1-btn");
const editPlayer2Btn = document.getElementById("edit-player-2-btn");

const playerConfigOverlayElement = document.getElementById("config-overlay");
const backdropElement = document.getElementById("backdrop");

const cancelConfigBtnElement = document.getElementById("cancel-config-btn");
const confirmConfigBtnElement = document.getElementById("confirm-config-btn");

editPlayer1Btn.addEventListener("click", openPlayerConfig);
editPlayer2Btn.addEventListener("click", openPlayerConfig);

cancelConfigBtnElement.addEventListener("click", closePlayerConfig);
confirmConfigBtnElement.addEventListener("click", confirmPlayerConfig);
backdropElement.addEventListener("click", closePlayerConfig);
