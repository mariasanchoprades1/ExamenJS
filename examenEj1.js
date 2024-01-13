
function validarClave() {
  var clave = document.getElementById("clave").value;
  var expresion = /^[A-Z]\d{3}$/;
  
  if (!expresion.test(clave)) {
    alert("La clave es incorrecta. Debe ser una letra mayúscula seguida de 3 números (ej: A444).");
    document.getElementById("clave").value = "";
    document.getElementById("clave").focus();
  } else {
    alert("La clave es correcta.");
  }
}

function agregarCampo() {
  var input = document.createElement("input");
  input.type = "text";
  input.id = "clave";
  
  var form = document.getElementById("formulario");
  form.appendChild(input);
}
