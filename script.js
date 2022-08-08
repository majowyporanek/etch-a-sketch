const container = document.querySelector('.container'); 




//creating divs
for(let i = 0; i <(64*64); i++){
    const con  = document.createElement('div');
    con.setAttribute("class", "square");
    container.appendChild(con);
}



//adding the hover element for each div
const pixels = document.querySelectorAll('.square');

pixels.forEach((el) => {
    el.addEventListener('mouseover', (event) => {
        el.setAttribute("class", "pixel");
    });
})


// asking user how many squares he/she wants


