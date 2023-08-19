export class Producto{
    _id?: number;
    element: string;
    status: string;
    descripcion: string;
   

    constructor(element: string, status: string, descripcion: string){
        this.element = element;
        this.status = status;
        this.descripcion = descripcion;
        
    }

}