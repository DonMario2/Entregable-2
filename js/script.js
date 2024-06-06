var tablero = document.getElementById("tablero");

var turno = 1;

var tabla = document.createElement("table");

var fichas = ["rojo", "verde"]; 

var celdas = []


for (var i = 0; i < 6; i++) {
  var fila = document.createElement("tr");

  for (var j = 0; j < 7; j++) {
    var celda = document.createElement("td");
    fila.appendChild(celda);
    celda.id = i + "-" + j; // Asignar ID único a cada celda
    celda.onclick = function() { 
        colocarFicha(this); 
    }; // Agregar evento click
    celdas.push(celda); // Agregar celda al array
    fila.appendChild(celda);
  }

  tabla.appendChild(fila);
}
tablero.appendChild(tabla)

var jugadorRojo = true;

function hovered (){
    const celdasHover = document.querySelectorAll('td');
celdasHover.forEach(celdasHover => {
    celdasHover.addEventListener('mouseover', () => {
      cambiarColorColumna(celdasHover.cellIndex);
    });
  
    celdasHover.addEventListener('mouseout', () => {
      resetearColorColumna(celdasHover.cellIndex);
    });

    celdasHover.addEventListener('click', () => {
        colocarFicha(celdasHover.cellIndex);
      });
  });
  
  function cambiarColorColumna(indiceColumna) {
    const celdasColumna = document.querySelectorAll(`td:nth-child(${indiceColumna + 1})`);
  
    celdasColumna.forEach(celdasHover => {
        celdasHover.style.backgroundColor = 'rgba(215, 214, 219, 0.2)'; 
    });
  }
  
  function resetearColorColumna(indiceColumna) {
    const celdasColumna = document.querySelectorAll(`td:nth-child(${indiceColumna + 1})`);
  
    celdasColumna.forEach(celdasHover => {
        celdasHover.style.backgroundColor = ''; 
    });
  }

  function colocarFicha(indiceColumna) {
    const celdasColumna = document.querySelectorAll(`td:nth-child(${indiceColumna + 1})`);

    for (var i = celdasColumna.length - 1; i >= 0; i--) {
      if (!celdasColumna[i].classList.contains('rojo') && !celdasColumna[i].classList.contains('verde')) {
        if (jugadorRojo) {
          celdasColumna[i].classList.add('rojo');
          document.getElementById('playerTurn').innerHTML = 'Turno del Jugador <span >Verde</span>';
        } else {
          celdasColumna[i].classList.add('verde');
          document.getElementById('playerTurn').innerHTML = 'Turno del Jugador <span>Rojo</span>';
        }
        jugadorRojo = !jugadorRojo; // Cambiar el turno de los jugadores
        break;
      }
    }
  }
}
hovered();