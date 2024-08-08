// let promise = new Promise((res,rej) =>{
//     console.log("Hello shut up");
//     //res("success");
//     rej("error is just for jk");
// });

//async and API calls

let tempText = document.querySelector("#Temp");
let descText = document.querySelector("#desc");

let url = "https://goweather.herokuapp.com/weather/%7Bcity%7D";
// let data = fetch(url);
// console.log(data);

let jk = async function(){
    let response = await fetch(url);
    let data = await response.json();
    tempText.innerHTML = data.temperature;
    descText.innerHTML = data.description;
    console.log(data.temperature);
    console.log(data.description);
}

jk();