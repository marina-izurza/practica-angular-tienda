export class Categorias {

    private id: number;
    private descripcion: string;
    private imagen: string;

    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getDescripcion(): string | undefined {
        return this.descripcion;
    }

    public setDescripcion(descripcion: string): void {
        this.descripcion = descripcion;
    }

    public getImagen(): string | undefined {
        return this.imagen;
    }

    public setImagen(imagen: string): void {
        this.imagen = imagen;
    }

    constructor(
        id: number,
        descripcion: string,
        imagen: string
    ){
        this.id = id
        this.descripcion = descripcion
        this.imagen = imagen
    }

}