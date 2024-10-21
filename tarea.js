class Tarea {
    constructor(nombre) {
        this.nombre = nombre;
        this.estado = 'pendiente';
    }

    cambiarEstado(nuevoEstado) {
        this.estado = nuevoEstado;
    }
}