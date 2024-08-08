let setupTxt = document.querySelector("#setup");
let jokeTxt = document.querySelector("#punchline");

let url = "https://official-joke-api.appspot.com/jokes/random";


let jk = async function(){
    let data = await fetch(url);
    let response = await data.json();
    let setup = response.setup;
    let puncline = response.punchline;
    displayOutput(setup,puncline);
}
jk();
function generate(){
    jk();
}

function displayOutput(setTxt,punchTxt){
    setupTxt.innerHTML = setTxt;
    jokeTxt.innerHTML = punchTxt;
}

