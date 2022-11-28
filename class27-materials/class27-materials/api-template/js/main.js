//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)
let img=document.querySelector('img')
let info=document.querySelector('h3')
let vid=document.querySelector('iframe')

function getFetch(){
  const choice = document.querySelector('input').value
  console.log(choice)
  const url = `https://api.nasa.gov/planetary/apod?api_key=yz1LM00TAjiurQfZJgugYXs0fcT1LHaeb4jMRwe9&date=${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        if( data.media_type =="image"){
          img.src=data.hdurl
        }
        else if(data.media_type=="video")
        {
          vid.src=data.url
        }
info.innerText=data.explanation

      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

