let input=document.querySelector("#input")
let btn=document.querySelector("#btn")
let greet=document.querySelector("#greeting")

function greetings(){
  greet.innerHTML="Hello "+ input.value+", we are happy to host you!"
}
