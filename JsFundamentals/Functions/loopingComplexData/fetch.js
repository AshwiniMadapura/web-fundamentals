const quoteContainer = document.querySelector("#quotes-container")
const quoteButton = document.querySelector("#quote-button")
const dogButton = document.querySelector("#dog-button")
const dogContainer = document.querySelector("#dogs-container")
const githubForm = document.querySelector("#github-form")
const githubInput = document.querySelector("#github-input")
const githubContainer = document.querySelector("#github-container")

const getQuote=()=>{


fetch ("https://api.quotable.io/random?maxLength=50")

.then(response=>{
    console.log(response)
    return response.json()
})

.then(data=>{
    console.log(data.content)
    quoteContainer.innerHTML+=`<p>${data.content}</p>`
})
}
quoteButton.addEventListener("click",getQuote)


    const getDogPicture = () => {
        fetch("https://dog.ceo/api/breed/pug/images/random")
            .then(response => {
                return response.json()
            })
            .then(data => {
                console.log(data.message)
                dogContainer.innerHTML += `<img src="${data.message}"></img>`
            })
    }
    
    dogButton.addEventListener("click", getDogPicture)

    // Change your fetch request to that instead of 1 random dog image you get 5. 
    // Each time you click the button 5 random dogs images should be added. 

    const getDogPicture1 = () => {
        fetch("https://dog.ceo/api/breed/pug/images/random/5")
            .then(response => {
                return response.json()
            })
            .then(data => {
                console.log(data.message)
                data.message.map(dog => {
                    // console.log(dog)
                    dogContainer.innerHTML += `<img src="${dog}"></img>`
                })
        })
    }
    
    dogButton.addEventListener("click", getDogPicture1)

    const getUserPic=(e)=>{
        e.preventDefault()
        const url= `https://api.github.com/users/${githubInput.value}`
        fetch (url)
        .then(response=>response.json())
        .then(data=>{
            githubContainer.innerHTML+=`<img scr=${data.avatar_url}`
        })
    }
    
    
   

