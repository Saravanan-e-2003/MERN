let submit = document.querySelector(".submit");

let res = document.querySelector(".result")
let number_to_guess = Math.floor(((Math.random() * 10) + 1));

console.log(number_to_guess);


    submit.addEventListener("onclick",() =>{
        let txt = document.querySelector("#t_box");
        let guessed_number = txt.innerText;
        if(parseInt(number_to_guess)== guessed_number){
            res.innerHTML = "You guessed correctly";
            return;
        }
    
        if(parseInt(number_to_guess) < guessed_number){
            res.innerHTML = "Too large!!, Guess smaller";
            return;
        }
    
        if(parseInt(number_to_guess) > guessed_number){
            res.innerHTML = "Too small!!, Guess large";
            return;
        }
    
        res.innerHTML = "You guessed wrong";
    });

