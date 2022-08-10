const container = document.querySelector('.container'); 
let numberOfSquares = 64;

let colorPicker = document.querySelector("#colorpicker");
let color = colorPicker.value;


//function to get a chosen color
function getColor() {
    document.querySelector("#colorpicker").onchange = e => {
        color = e.target.value;
    }
    return color;
}


//creating divs
for(let i = 0; i <(64*64); i++){
    const con  = document.createElement('div');
    con.setAttribute("class", "square");
    container.appendChild(con);
}



//adding the hover element for each div
let pixels = document.querySelectorAll('.square');

function addDraw(i) {
    i.forEach((el) => {
        el.addEventListener('mouseover', (event) => {
            let pixelClass = document.querySelectorAll('.pixel');
            pixelClass.forEach((p)=> p.style.setProperty('--colorToDraw', color));
            el.setAttribute("class", "pixel");
        });
    });
}

//adding
addDraw(pixels);



//function to clear the drawing
function removeDraw() {
    let colored = document.querySelectorAll('.pixel');
    colored.forEach((el) => {
            el.classList.toggle('pixel');
            console.log("removed ");
    });   
}


// asking user how many squares he/she wants

const btn = document.querySelector('.decision');
let userAnswer = null;



//function to get how many squares per side user wants
function howManySquares() {
    userAnswer = parseInt(prompt("enter how many squares per side do you want (max: 100, min: 1)"));
    if(userAnswer > 100 || userAnswer <= 0) {
        howManySquares();
    }
    return userAnswer;
}



function generateGrid() { ;   
    numberOfSquares = howManySquares(); // numbers of squares per side
    let toRemove = document.querySelectorAll('.square');
    let toRemove2 = document.querySelectorAll('.pixel');
    // toRemove.forEach(((r)=>r.style.border = "none"));
    toRemove.forEach((r) => 
        r.remove()); //removing an old grid
    toRemove2.forEach((r)=> r.remove());

    //creating a new grid:
    for(let i = 0; i < (numberOfSquares*numberOfSquares); i++){
        const con  = document.createElement('div');
        con.setAttribute("class", "square");
        container.appendChild(con);
    }
    const newPixels = document.querySelectorAll(".square");
    addDraw(newPixels);
    container.style.setProperty('--numberOfSquares', numberOfSquares); // changing grid-template-columns and grid-template-rows attributes

}

btn.addEventListener('click', generateGrid);

