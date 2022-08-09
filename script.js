const container = document.querySelector('.container'); 




//creating divs
for(let i = 0; i <(64*64); i++){
    const con  = document.createElement('div');
    con.setAttribute("class", "square");
    container.appendChild(con);
}



//adding the hover element for each div
let pixels = document.querySelectorAll('.square');

pixels.forEach((el) => {
    el.addEventListener('mouseover', (event) => {
        el.setAttribute("class", "pixel");
    });
})


// asking user how many squares he/she wants

const btn = document.querySelector('.decision');


let userAnswer = null; 

function howManySquares() {
    userAnswer = parseInt(prompt("enter how many squares per side do you want (max: 100, min: 1)"));
    if(userAnswer > 100 || userAnswer <= 0) {
        howManySquares();
    }else {
        return userAnswer;
    }
}


function generateGrid() {
    let numberOfSquares = howManySquares(); // numbers of squares per side
    let toRemove = document.querySelectorAll('.square');
    toRemove.forEach((r) => r.remove());
}

btn.addEventListener('click', generateGrid);

