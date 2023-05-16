var slider = document.getElementById("myRange");




const container = document.querySelector('.grid__container');
for (let i = 0; i < 5*5; i++) {
  const square = document.createElement('div');
  square.classList.add('grid__item');
  container.appendChild(square);
}


function create_grid(num) {
    for (let i = 0; i < num*num; i++) {
        const square = document.createElement('div');
        square.classList.add('grid__item');
        container.appendChild(square);
      }

}



