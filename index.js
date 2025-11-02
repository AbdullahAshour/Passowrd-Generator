const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];
let generateBtn = document.querySelector("button"); // generating button
let firstPw = document.querySelector(".pw-1"); // First password area
let secondPw = document.querySelector(".pw-2"); // second password area
// copy icons
let btnOne = document.querySelector(".img-1");
let btnTwo = document.querySelector(".img-2");

let input = document.querySelector("#length"); // Password's input

input.addEventListener("input", () => {
  let warning = document.querySelector("small");
  const isInvalid = input.value < 4 || input.value > 18;
  generateBtn.disabled = isInvalid;
  generateBtn.classList.toggle("disabled", isInvalid);
  if (isInvalid) {
    warning.textContent = "Please choose a number between 4 and 18"; // Error message
    warning.focus();
  } else {
    warning.textContent = "";
  }
});

generateBtn.addEventListener("click", () => {
  let length = document.querySelector("#length").value; // Password's length
  // generated passwords database
  let generatedPwOne = "";
  let generatedPwTwo = "";

  for (let i = 0; i < length; i++) {
    // generating the passwords
    let randomNumOne = Math.floor(Math.random() * characters.length);
    let randomNumTwo = Math.floor(Math.random() * characters.length);
    // pushing the generated characters to the database variable
    generatedPwOne += characters[randomNumOne];
    generatedPwTwo += characters[randomNumTwo];
  }

  // displaying the generated password
  firstPw.textContent = generatedPwOne;
  secondPw.textContent = generatedPwTwo;
});

// The copy icon functionality
btnOne.addEventListener("click", () => {
  if (firstPw.textContent !== "") {
    navigator.clipboard.writeText(firstPw.textContent);
    document.querySelector(".sm-1").classList.add("copied");
    setTimeout(() => {
      document.querySelector(".sm-1").classList.remove("copied");
    }, 2000);
  }
});
btnTwo.addEventListener("click", () => {
  if (secondPw.textContent !== "") {
    navigator.clipboard.writeText(secondPw.textContent);
    document.querySelector(".sm-2").classList.add("copied");
    setTimeout(() => {
      document.querySelector(".sm-2").classList.remove("copied");
    }, 2000);
  }
});

// A fallback function for unsupported browsers to resize the input dynamically.
if (!CSS.supports("field-sizing: content")) {
  document.querySelectorAll(".auto-width").forEach((input) => {
    const mirror = document.createElement("span");
    mirror.style.cssText = `
      position: absolute;
      visibility: hidden;
      white-space: pre;
      font: inherit;
      padding: 0;
      border: 0;
    `;
    document.body.appendChild(mirror);

    const resize = () => {
      mirror.textContent = input.value || "";
      input.style.width = mirror.offsetWidth + 30 + "px"; // +padding fudge
    };

    resize();
    input.addEventListener("input", resize);
  });
}
