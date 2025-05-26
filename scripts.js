isLightTheme=false;
const boton = document.getElementById('cambiarColor').addEventListener('click', () => {
  alert('¡Hola desde JS!');
});


function changesTextColor(className) {
  const elements = document.getElementsByClassName(className);
  if (elements.length === 0) {
    console.error("No se encontró ningún elemento con la clase:", className);
    return;
  }

  const colores = ["red", "green", "blue", "purple"]; // Define los colores
  let index = 0;

  setInterval(() => {
    for (let el of elements) {
    el.style.transition = "background-color 1s ease";
  }
    index = (index + 1) % colores.length;
  }, 100); // Cada 0.1 segundos (100 ms)
}

function changesBackgroundColor(className) {
  const colores = [
    "#191970", 
    "#000080", 
    "#2D2D86", 
    "#002147", 
    "#00416A"
  ];

  const elements = document.getElementsByClassName(className);
  if (elements.length === 0) {
    console.error("No se encontró ningún elemento con la clase:", className);
    return;
  }

  // Aplica transición a todos los elementos (una sola vez)
  for (let el of elements) {
    el.style.transition = "background-color 1s ease";
  }

  let index = 0;

  setInterval(() => {
    for (let el of elements) {
      el.style.backgroundColor = colores[index];
    }
    index = (index + 1) % colores.length;
  }, 2000); // cada 2 segundos para que se note bien la transición
}
