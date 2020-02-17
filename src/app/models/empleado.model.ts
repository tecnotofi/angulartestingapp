export class Empleado {
    public id: number;
    public nombre: string;
    public apellido: string;
    public email: string;

    // constructor() { }

    constructor( nombre: string, apellido: string, email: string) {
        // this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
    }
}