let listaPendiente = [];
let listaHaciendo = [];
let listaCompletada = [];

function agregarTarea() {
    const input = document.getElementById('nuevaTarea');
    const nombreTarea = input.value.trim();

    if (nombreTarea) {
        const nuevaTarea = new Tarea(nombreTarea);
        listaPendiente[listaPendiente.length] = nuevaTarea;
        input.value = '';
        actualizarTareas(listaPendiente, listaHaciendo, listaCompletada);
    }
}

function moverTarea(index, nuevoEstado) {
    let tarea;

    if (nuevoEstado === 'haciendo') {
        tarea = listaPendiente[index];
        tarea.cambiarEstado('haciendo');
        listaHaciendo[listaHaciendo.length] = tarea;
        borrarTarea(listaPendiente, index);
    } else if (nuevoEstado === 'pendiente') {
        tarea = listaHaciendo[index];
        tarea.cambiarEstado('pendiente');
        listaPendiente[listaPendiente.length] = tarea;
        borrarTarea(listaHaciendo, index);
    } else if (nuevoEstado === 'completada') {
        tarea = listaHaciendo[index];
        tarea.cambiarEstado('completada');
        listaCompletada[listaCompletada.length] = tarea;
        borrarTarea(listaHaciendo, index);
    }

    actualizarTareas(listaPendiente, listaHaciendo, listaCompletada);
}

function borrarTarea(lista, index) {
    for (let i = index; i < lista.length - 1; i++) {
        lista[i] = lista[i + 1];
    }
    lista.length = lista.length - 1;
}