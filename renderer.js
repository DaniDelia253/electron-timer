/**
 * This file is loaded via the <script> tag in the index.html file and will
 * be executed in the renderer process for that window. No Node.js APIs are
 * available in this process because `nodeIntegration` is turned off and
 * `contextIsolation` is turned on. Use the contextBridge API in `preload.js`
 * to expose Node.js functionality from the main process.
 */
const timer = document.querySelector(".time-display");
const timeLeft = "10:00";
timer.textContent = timeLeft;

const timeButtons = document.querySelectorAll(".time-btn");
console.log(timeButtons);
timeButtons.forEach((btn) => btn.addEventListener("click", startTimer));

function startTimer() {
	console.log(this.dataset.seconds);
}
