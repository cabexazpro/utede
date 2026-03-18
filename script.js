function guardarDatos() {
 const formulario = document.getElementById('Registro');
 const tabla = document.getElementById('tablaDatos');
 formulario.addEventListener('submit', function(event) {
        event.preventDefault();
    });
    
        const nombre = formulario.elements['Nombre'].value;
        const cedula = document.getElementById('Cedula').value;
        if(nombre.length<3){
           // alert('El nombre debe tener al menos 3 caracteres');
            document.getElementById('Nombre').focus();
            document.getElementById('Nombre').style.borderColor = 'red';
            //muestra el mensaje de error
            document.getElementById('errorNombre').textContent = 'El nombre debe tener al menos 3 caracteres';
            document.getElementById('errorNombre').style.display = 'block';
            return;
        }else{
            // alert('El nombre es correcto');
            document.getElementById('Nombre').style.borderColor = 'green';
            document.getElementById('errorNombre').style.display = 'none';
            
        }
        const nuevaFila = tabla.insertRow();
        const celdaNombre = nuevaFila.insertCell(0);
        const celdaCedula = nuevaFila.insertCell(1);
        const celdaAcciones = nuevaFila.insertCell(2); 
        celdaNombre.textContent = nombre;
        celdaCedula.textContent = cedula;
        celdaAcciones.innerHTML = '<span onclick="eliminarFila(this)">X</span>';
formulario.reset();
document.getElementById('Nombre').focus();
    
}
function eliminarFila(elemento) {
    const fila = elemento.parentNode.parentNode;
    fila.parentNode.removeChild(fila);
}
function buscarDatos() {

    const tabla = document.getElementById('tablaDatos');
    const busqueda = document.getElementById('Buscar').value.toLowerCase(); 
    for (let i = 1; i < tabla.rows.length; i++) {
        const nombre = tabla.rows[i].cells[0].textContent.toLowerCase();
        const cedula = tabla.rows[i].cells[1].textContent.toLowerCase();
        if (nombre.includes(busqueda) || cedula.includes(busqueda)) {
            tabla.rows[i].style.display = '';
        } else {
            tabla.rows[i].style.display = 'none';
        }
    }
}
