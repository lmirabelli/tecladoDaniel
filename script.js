// Seleccionamos el visor y todas las teclas
const visor = document.querySelector('.visor');
const teclas = document.querySelectorAll('.tecla');

teclas.forEach(tecla => {
    tecla.addEventListener('click', () => {
        const valor = tecla.textContent;

        if (valor === 'BORRAR') {
            // Elimina el último carácter
            visor.textContent = visor.textContent.slice(0, -1);
        } 
        else if (valor === 'BORRAR TODO') {
            // Limpia todo el contenido
            visor.textContent = '';
        } 
        else {
            // Escribe el texto de la tecla en el visor
            visor.textContent += valor;
        }
    });
});