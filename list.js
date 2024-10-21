function actualizarTareas(listaPendiente, listaHaciendo, listaCompletada) {
    document.getElementById('listaPendiente').innerHTML = generarTareas(listaPendiente, 'pendiente');
    document.getElementById('listaHaciendo').innerHTML = generarTareas(listaHaciendo, 'haciendo');
    document.getElementById('listaCompletada').innerHTML = generarTareas(listaCompletada, 'completada');
}

function generarTareas(tareas, estado) {
    let html = '';
    for (let i = 0; i < tareas.length; i++) {
        const tarea = tareas[i];
        if (estado === 'pendiente') {
            html += `<div class="tarea">${tarea.nombre} <button onclick="moverTarea(${i}, 'haciendo')">▶</button></div>`;
        } else if (estado === 'haciendo') {
            html += `<div class="tarea">${tarea.nombre} 
                        <button class="completar" onclick="moverTarea(${i}, 'completada')">✔</button>
                        <button onclick="moverTarea(${i}, 'pendiente')">◀</button>
                    </div>`;
        } else {
            html += `<div class="tarea">${tarea.nombre} <button disabled class="completado">✔</button></div>`;
        }
    }
    return html;
}