
export class Articulo {

    id: number | undefined;
    nombre: string;
    precio: number;
    descripcion?: number;
    tallas?: string;
    fav?: string;
    imagen?: string;

    constructor(
        id: number,
        nombre: string,
        precio: number,
        descripcion?: number,
        tallas?: string,
        fav?: string,
        imagen?: string
    ){
        this.id = id
        this.nombre = nombre
        this.precio = precio
        this.descripcion = descripcion
        this.tallas = tallas
        this.fav = fav
        this.imagen = imagen
    }
}