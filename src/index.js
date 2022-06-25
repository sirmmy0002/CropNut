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
      'X-RapidAPI-Host': 'malamal-data-for-ecommerce.p.rapidapi.com'
    }
  };
  
  fetch('https://malamal-data-for-ecommerce.p.rapidapi.com/product/B01MXL4ANH/offers?api_key=bd2a7b5398c95efa6b82ceb23cf7416e', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));