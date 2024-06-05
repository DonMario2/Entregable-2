var tablero = document.getElementById("tablero");

var tabla = document.createElement("table");

for (var i = 0; i < 6; i++) {
  var fila = document.createElement("tr");

  for (var j = 0; j < 7; j++) {
    var celda = document.createElement("td");
    fila.appendChild(celda);
  }

  tabla.appendChild(fila);
}
tablero.appendChild(tabla)



function hovered (){
    const celdasHover = document.querySelectorAll('td');
celdasHover.forEach(celdasHover => {
    celdasHover.addEventListener('mouseover', () => {
      cambiarColorColumna(celdasHover.cellIndex);
    });
  
    celdasHover.addEventListener('mouseout', () => {
      resetearColorColumna(celdasHover.cellIndex);
    });
  });
  
  function cambiarColorColumna(indiceColumna) {
    const celdasColumna = document.querySelectorAll(`td:nth-child(${indiceColumna + 1})`);
  
    celdasColumna.forEach(celdasHover => {
        celdasHover.style.backgroundColor = 'rgba(215, 214, 219, 0.72)'; 
    });
  }
  
  function resetearColorColumna(indiceColumna) {
    const celdasColumna = document.querySelectorAll(`td:nth-child(${indiceColumna + 1})`);
  
    celdasColumna.forEach(celdasHover => {
        celdasHover.style.backgroundColor = ''; 
    });
  }
}
hovered();

