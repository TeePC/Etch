const slider = document.getElementById("myRange");

const output = document.getElementById("myValue");

const output2 = document.getElementById("myValue2");

output.innerHTML = slider.value;

output2.innerHTML = slider.value;

let current__value = slider.value;

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
  container.appendChild(square);
}



function clear_grid() {
  const grid = document.getElementById("grid");
  while ( grid.firstChild ) {
    grid.removeChild(grid.firstChild);
  }

}



function create_grid(num) {
      clear_grid();

  
      document.getElementById('grid').style = "grid-template-columns: repeat(" + current__value + ", 1fr)"
  
    console.log(current__value);

    for (let i = 0; i < num*num; i++) {
        const square = document.createElement('div');
        square.classList.add('grid__item');
        container.appendChild(square);
      }

}



