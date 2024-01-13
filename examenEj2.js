document.addEventListener('DOMContentLoaded', function () {  
    efectoHover(); 
    agregarTextoEnlaces();
}); 

function efectoHover() { 
    let enlaces = document.querySelectorAll(".cambiar-tamano"); 
    enlaces.forEach(enlace => { 
        enlace.addEventListener('mouseover', function () { 
            enlaces.forEach(e => e.style.fontSize = '20pt');
        }); 
        enlace.addEventListener('mouseout', function () { 
            enlaces.forEach(e => e.style.fontSize = '12pt');
        }); 
    }); 
} 

function agregarTextoEnlaces() {
    let enlaces = document.querySelectorAll(".cambiar-tamano");
    enlaces.forEach(enlace => {
        let texto = document.createElement('span');
        texto.textContent = 'Esto es un enlace: ';
        enlace.parentNode.insertBefore(texto, enlace);
    });
}
