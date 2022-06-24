let input=document.querySelector("#input")
let btn=document.querySelector("#btn")
let greet=document.querySelector("#greeting")

function greetings(){
  greet.innerHTML="Hello "+ input.value+",welcome to CropNut we are happy to host you!"
}