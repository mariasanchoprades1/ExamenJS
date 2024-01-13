
function resetearFormulario() {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    var radios = document.querySelectorAll('input[type="radio"]');
    
    checkboxes.forEach(function(checkbox) {
        checkbox.checked = false;
    });
    
    radios.forEach(function(radio) {
        radio.checked = false;
    });
}

function mostrarOpcionesSeleccionadas() {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    var radios = document.querySelectorAll('input[type="radio"]:checked');
    var opcionesSeleccionadas = "";
    
    checkboxes.forEach(function(checkbox) {
        opcionesSeleccionadas += checkbox.value + ", ";
    });
    
    radios.forEach(function(radio) {
        opcionesSeleccionadas += radio.value + ", ";
    });
    
    opcionesSeleccionadas = opcionesSeleccionadas.slice(0, -2); 
    
    alert("Opciones seleccionadas: " + opcionesSeleccionadas);
}




function calcularPrecio(entrantesSeleccionados, segundoPlatoSeleccionado) {
    const precioEntrante = 5;
    const precioSegundoPlato = 10;
    const precioPostre = 5;

    let precioTotal = entrantesSeleccionados.length * precioEntrante;
    if (segundoPlatoSeleccionado) {
        precioTotal += precioSegundoPlato;
    }
    precioTotal += precioPostre; 

    return precioTotal;
}

function mostrarOpcionesSeleccionadas() {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    var radios = document.querySelectorAll('input[type="radio"]:checked');
    var opcionesSeleccionadas = "";
    
    checkboxes.forEach(function(checkbox) {
        opcionesSeleccionadas += checkbox.value + ", ";
    });
    
    var segundoPlatoSeleccionado = radios.length > 0;

    radios.forEach(function(radio) {
        opcionesSeleccionadas += radio.value + ", ";
    });
    
    opcionesSeleccionadas = opcionesSeleccionadas.slice(0, -2);

    if (!segundoPlatoSeleccionado) {
        alert("Error: Debe seleccionar un segundo plato.");
        return;
    }
    
    var precioTotal = calcularPrecio(checkboxes, segundoPlatoSeleccionado);
    alert("Opciones seleccionadas: " + opcionesSeleccionadas + "\nPrecio Total: " + precioTotal + " Euros");
}
