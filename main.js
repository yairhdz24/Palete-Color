function generarPaleta() {
    const colorPalette = document.getElementById('colorPalette');
    colorPalette.innerHTML = ''; // Limpiar la paleta existente

    for (let i = 0; i < 5; i++) {
        const randomColor = generarColorAleatorio();
        const colorBox = document.createElement('div');
        colorBox.classList.add('color-box');
        colorBox.style.backgroundColor = randomColor;

        // Crear un elemento para mostrar el codigo hexadecimal
        const colorCode = document.createElement('div');
        colorCode.classList.add('color-code');
        colorCode.innerText = randomColor;
        
        // Agregar el codigo hexadecimal al color-box
        colorBox.appendChild(colorCode);

        // Agregar evento de clic para copiar al portapapeles
        colorBox.addEventListener('click', function() {
            copiarAlPortapapeles(randomColor);
        });

        colorPalette.appendChild(colorBox);
    }
}

function generarColorAleatorio() {
    const letras = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letras[Math.floor(Math.random() * 16)];
    }
    return color;
}

function copiarAlPortapapeles(texto) {
    const elementoTemporal = document.createElement('textarea');
    elementoTemporal.value = texto;
    document.body.appendChild(elementoTemporal);
    elementoTemporal.select();
    document.execCommand('copy');
    document.body.removeChild(elementoTemporal);

    // Muestra el toast
    mostrarToast('Código copiado al portapapeles');
}

function mostrarToast(mensaje) {
    const toastContainer = document.createElement('div');
    toastContainer.classList.add('toast-container');

    const toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerText = mensaje;

    toastContainer.appendChild(toast);

    // Agrega el toastContainer al body
    document.body.appendChild(toastContainer);

    // Muestra el toast
    toastContainer.style.display = 'flex';

    // Elimina el toastContainer después de un tiempo
    setTimeout(() => {
        document.body.removeChild(toastContainer);
    }, 3000); // 3000 milisegundos = 3 segundos (ajusta según tus necesidades)
}
