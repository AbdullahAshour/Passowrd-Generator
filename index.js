const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let generateBtn = document.querySelector("button")
let firstPw = document.querySelector(".pw-1")
let secondPw = document.querySelector(".pw-2")

generateBtn.addEventListener("click", ()=> {
  let length = document.querySelector("#length").value
  let warning = document.querySelector("small")
  if (length < 4 || length > 18){
    warning.textContent = "Please choose a number between 4 and 18"
  }else{
    firstPw.textContent = ""
    secondPw.textContent = ""
    warning.textContent = ""

    for(let i = 0; i < length; i++){
      let randomNumOne = Math.floor(Math.random() * characters.length)
      let randomNumTwo = Math.floor(Math.random() * characters.length)
      firstPw.textContent += characters[randomNumOne]
      secondPw.textContent += characters[randomNumTwo]
    }
  }
})