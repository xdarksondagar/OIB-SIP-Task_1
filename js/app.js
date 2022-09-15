const dis = document.querySelectorAll(".dis");
const btns = document.querySelectorAll(".btn");
const display = document.querySelector(".display");
const ans = document.querySelectorAll(".ans");
const clear = document.querySelector(".clear");
const cancel = document.querySelector(".cancel");

// display innerHTML set
display.innerHTML = "";

// Event listners
dis.forEach((btn) => {
  btn.addEventListener("click", () => displayNo(btn));
});
ans.forEach((btn) => {
  btn.addEventListener("click", () => evaRes());
});
clear.addEventListener("click", () => clearScreen());
cancel.addEventListener("click", () => cancelFun());

// displays the number
function displayNo(btn) {
  let key = btn.getAttribute("data-key");
  display.innerHTML += key;
}
// For clear screen
function clearScreen() {
  display.innerHTML = "";
}

// Cancel an number
function cancelFun() {
  const eva = display.innerHTML.split("");
  let disp = display.innerHTML;
  if (eva[eva.length - 1] === " " && eva[eva.length - 3] === " ") {
    display.innerHTML = disp.slice(0, eva.length - 3);
  } else if (eva[eva.length - 1] === " ") {
    display.innerHTML = disp.slice(0, eva.length - 2);
  } else if (eva[eva.length - 1] === bracket) {
    display.innerHTML = disp.slice(0, eva.length - 2);
  } else {
    display.innerHTML = disp.slice(0, eva.length - 1);
  }
}

/* Calculations happen here */
function evaRes() {
  let result = display.innerHTML;
  result = result.replace("^", "**").replace("%", "/100").replace("×", "*");
  if (display.innerHTML === "") {
    display.innerHTML = "";
  } else {
    display.innerHTML = evalute(result);
  }
}
