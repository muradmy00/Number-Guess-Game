const minimum = 1;
const maximum = 100;

const answer = Math.round(Math.random() * (100 - 1 + 1)) + 1;

// console.log(answer);



const Buttons = document.getElementById("mybutton");

Buttons.onclick = function() {


    let attempts = 0;
    let guess;

    guess = document.getElementById("myinput").value;
    guess = Number(guess);

    let result = document.getElementById("myh4");

    if(isNaN(guess)){
       result = result.textContent = "Please Enter a Valid Number!";
    }
    else if(guess < minimum || guess > maximum){

       result = result.textContent = "Please Enter a Valid Number!";
    }

    else{
        attempts++;
        if(guess < answer){

            result = result.textContent = "Too Low! Try Again!";
        }
        else if(guess > answer){

            result = result.textContent = "Too High! Try Again!";
        }
        else{
            result = result.textContent = `Correct! The Answer is ${answer} It Took you ${attempts} attempts!`;
        }
    }

}