const raimbow = document.getElementById('raimbow');
const grey = document.getElementById('grey');
const newGrid = document.getElementById('newGrid');


let isRaimbow = false;
let isGrey = false;


raimbow.addEventListener('click', (e) => {
    isRaimbow = true;
    isGrey = false;
});

grey.addEventListener('click', (e) => { 
    isRaimbow = false;
    isGrey = true;
});

newGrid.addEventListener('click', (e) => {
    let nuevaCuadricula = prompt(('Ingrese una nueva cantidad de cuadros por lado:'));
    nuevaCuadricula = parseInt(nuevaCuadricula);
    if (nuevaCuadricula < 1 || nuevaCuadricula > 100 || isNaN(nuevaCuadricula)){
        alert('Ingrese un número entre 1 y 100');
        return;
    }
    createGrid(container, nuevaCuadricula);
});


function createDiv () {
    let div = document.createElement('div');
    div.classList.add('myDiv');
    
    div.addEventListener('mouseover', (e)=> {
        if(isRaimbow){
            div.style.backgroundColor = randomColor();
        }else if (isGrey){
            div.style.backgroundColor = colorGrey();
        }
    });
    
    return div;
}

function createGrid (container, size) {
    for (let i = 0; i <size; i++) {
        const row = document.createElement('div');
        row.classList.add('row');

        for (let j = 0; j <size ; j++){
            const div = createDiv();
            row.appendChild(div);
        }
        container.appendChild(row);
    }    
}

let container = document.querySelector('.gridDivs');
createGrid(container, 16);

function randomColor(){
    const letters = '0123456789ABCDEF'; 
    let color = '#';
    for (let i= 0; i<6; i++){
        color += letters[Math.floor(Math.random()*16)];
    }
    return color;
}

function colorGrey(){
    let greyColor = '#808080';
    return greyColor;
}