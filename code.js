let url = 'https://api.adviceslip.com/advice'
let advicePlaceholder = document.querySelector('#advicePlaceholder')
let dice = document.querySelector('#dice')
let adviceID = document.querySelector('#adviceID')

const fetchAPI = async ()=>{
    const response = await fetch(url)
    const fetchedData = await response.json()

    advicePlaceholder.textContent = '"' + fetchedData.slip.advice + '"'
    adviceID.textContent = 'ADVICE' + ' #' + fetchedData.slip.id 
}

fetchAPI()

dice.addEventListener('click', ()=>{
    fetchAPI()
})