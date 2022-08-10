//function to get a chosen color
function getColor() {
    document.querySelector("#colorpicker").onchange = e => {
        color = e.target.value;
    }
    return color;
}




const container = document.querySelector('.container'); 
let numberOfSquares = 64;

let colorPicker = document.querySelector("#colorpicker");
let color = colorPicker.value;
color = getColor();




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
            el.setAttribute("class", "pixel");
            pixelClass.forEach((pixel)=> pixel.style.setProperty('--colorToDraw',getColor()))
        });
    });
}

//adding
addDraw(pixels);


//function to clear the drawing
function removeDraw() {
    // style="--colorToDraw:#0000ff;"
    let styled = document.querySelectorAll('.pixel[style]'); //get inlined styled elements in order to remove them
    styled.forEach((s)=> {s.removeAttribute('style')}) 
    

    let colored = document.querySelectorAll('.pixel');
    colored.forEach((el) => {
            el.classList.add('removedDraw');
            el.classList.toggle('pixel');
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



function generateGrid() { 
    elementsToToggle = document.querySelectorAll('.removedDraw');
    elementsToToggle.forEach((e) => e.classList.toggle('pixel'));   
    numberOfSquares = howManySquares(); // numbers of squares per side
    let toRemove = document.querySelectorAll('.square');
    let toRemove2 = document.querySelectorAll('.pixel');
   
    toRemove.forEach((r) => 
        r.remove()); 
        
        //removing an old grid
    toRemove2.forEach((r)=> {
        r.remove()
    });

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

//button to remove a draw:
const removeButton = document.querySelector(".btn");
let elementsToToggle;
removeButton.addEventListener('click', () => {
    removeDraw();
});

