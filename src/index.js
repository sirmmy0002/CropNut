let input=document.querySelector("#input")
let btn=document.querySelector("#btn")
let greet=document.querySelector("#greeting")

function greetings(){
  greet.innerHTML="Hello "+ input.value+",welcome to CropNut we are happy to host you!"
}
 
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '05ba7b9cabmsh705315888b0430ep16a29cjsn68fbf166675f',
		'X-RapidAPI-Host': 'world-ecommerce.p.rapidapi.com'
	}
};

fetch('https://world-ecommerce.p.rapidapi.com/?url=https%3A%2F%2Fwww.amazon.com%2Fdp%2FB08L5RJ392', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

  function display(product)
  {
    const shopContent = document.getElementById
  }