const entryMessage = document.querySelector("#entry-message");
const translateButton = document.getElementById("translate-btn");
const display = document.getElementById("display-text");

var displayText = "Welcome to minion translator. Enter something to speak to minions."

display.innerHTML = displayText;


translateButton.addEventListener('click' , ()=>{
    fetch("https://api.funtranslations.com/translate/minion.json?text="+entryMessage.value)
        .then( response => {
            response.json()
                .then( data=> {
                    display.innerHTML = data.contents.translated
                })
        })
    //display.innerHTML = entryMessage.value;
})

/* entryMessage.addEventListener("input" , ()=>{
    console.log("Message = " + entryMessage.value);
}) */

display.addEventListener("click", ()=>{
    console.log("Clicked display area");
})