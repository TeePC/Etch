const slider = document.getElementById("myRange");

const output = document.getElementById("myValue");

const output2 = document.getElementById("myValue2");

output.innerHTML = slider.value;

output2.innerHTML = slider.value;

let current__value = slider.value;

let MDOWN = false;

let current__color = document.getElementById("color");


let change__color = event => event.target.style.backgroundColor = current__color.value;

const grid = document.getElementById("grid");




slider.oninput = function() {
  output.innerHTML = this.value;
  output2.innerHTML = this.value;
  current__value = this.value;
  
}

slider.onchange = function() {
  create_grid(current__value);
}





const container = document.querySelector('.grid__container');
for (let i = 0; i < 16*16; i++) {
  const square = document.createElement('div');
  square.classList.add('grid__item');

      equip(square); 
      square.addEventListener("mousedown", e => e.preventDefault());
  container.appendChild(square);
  

}





function clear_grid() {
  const clear = document.getElementById("grid");
  while ( clear.firstChild ) {
    grid.removeChild(clear.firstChild);
  }
    

}

function reset() {
const check = document.getElementsByClassName("grid__item");

  for ( let i = 0; i< check.length; i++) {
    check[i].style.backgroundColor = "white";
  }

}

let is__toggled = false;

function toggle__gridLines() {
  const square = document.getElementsByClassName("grid__item");
  
  console.log(is__toggled);
   if (!is__toggled) {
    for ( let i = 0; i< square.length; i++) {
    square[i].style.border = "none";
  }
  is__toggled = true;
  console.log(is__toggled);
} else {
  for ( let i = 0; i< square.length; i++) {
    square[i].style.border = "1px solid rgba(0, 0, 0, 0.8)";
  }
  is__toggled = false;

}
}


function create_grid(num) {
      clear_grid();

      document.getElementById('grid').style = "grid-template-columns: repeat(" + current__value + ", 1fr)"

        for (let i = 0; i < num*num; i++) {
            const square = document.createElement('div');
            square.classList.add('grid__item');
              equip(square); 
        // prevent drag default
               square.addEventListener("mousedown", e => e.preventDefault());
              container.appendChild(square);
      }

      
}



// change__color = event => event.target.style.backgroundColor = current__color.value;
function equip(box) {
  box.addEventListener("mousedown",box => { change__color(box)});
  box.addEventListener("mouseover", box => {
    if (box.buttons == 1) change__color(box);
  });

  //box.addEventListener("touchstart", change__color);
  //box.addEventListener("touchmove", event => {
   // if (event.buttons == 1) change__color(event);
 // });
}


function equip_erase(box) {
  box.addEventListener("mousedown", box => { this.target.style.backgroundColor = "white" });
  box.addEventListener("mouseover", box => {
    if (box.buttons == 1) change__color(box);
  });

}

let toggle__eraser = false; 

function eraser() {

  const status = document.getElementById("eraserStatus");
  const squares = document.getElementsByClassName("grid__item");

  if (!toggle__eraser) {
    status.textContent = "Eraser:On"
    change__color = event => event.target.style.backgroundColor = "white";
    
    const arr = Array.from(squares) ; 
     
     toggle__eraser = true;
  } else {
    status.textContent = "Eraser:Off"
    change__color = squares => squares.target.style.backgroundColor = current__color.value;

    //for ( let i = 0; i < squares.length; i++) {
      //equip(squares);
     //} 
    toggle__eraser = false;
  }
  }

  const randColor = () =>  {
    return "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
    console.log(randColor)
}

let toggle__rainbow = false;

  function rainbow() {

    const status = document.getElementById("rainbowStatus");
    const squares = document.getElementsByClassName("grid__item");

          if (!toggle__rainbow) {
            status.textContent = "Rainbow:On"
            change__color = squares => squares.target.style.backgroundColor = randColor();

            toggle__rainbow = true;
          }

          else {

            status.textContent = "Rainbow:Off"
            change__color = squares => squares.target.style.backgroundColor = current__color.value;

            toggle__rainbow = false;
          }
    


  }
 

