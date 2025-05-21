isLightTheme=false;
const boton = document.getElementById('cambiarColor').addEventListener('click', () => {
  alert('¡Hola desde JS!');
});
const colores = [
  "#FF0000", // rojo puro
  "#00FF00", // verde puro
  "#0000FF", // azul puro
  "#FFFF00", // amarillo puro
  "#FF00FF", // magenta
  "#00FFFF", // cian
  "#FFFFFF", // blanco
  "#000000", // negro (alto contraste)
  "#FF8800", // naranja brillante
  "#8800FF", // púrpura neón
  "#00FF88", // verde menta neón
  "#FF0088", // fucsia intenso
  "#88FF00", // lima radiante
  "#0088FF", // azul eléctrico
  "#FF4444", // rojo intenso
  "#44FF44", // verde radioactivo
  "#4444FF"  // azul violeta
];


function changesTextColor(className) {
  const elements = document.getElementsByClassName(className);
  if (elements.length === 0) {
    console.error("No se encontró ningún elemento con la clase:", className);
    return;
  }

  let index = 0;

  setInterval(() => {
    for (let i = 0; i < elements.length; i++) {
      elements[i].style.backgroundColor = colores[index];
    }
    index = (index + 1) % colores.length;
  }, 1); // cada 0.1 segundos
}
function changesBackgroundColor(className) {
  const elements = document.getElementsByClassName(className);
  if (elements.length === 0) {
    console.error("No se encontró ningún elemento con la clase:", className);
    return;
  }

  let index = 0;

  setInterval(() => {
    for (let i = 0; i < elements.length; i++) {
      elements[i].style.color = colores[index];
    }
    index = (index + 1) % colores.length;
  }, 1); // cada 0.1 segundos
}