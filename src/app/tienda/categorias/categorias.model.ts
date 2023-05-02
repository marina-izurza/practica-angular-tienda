export class Categorias {

    private imagen?: string
    private descripcion?: string

    public getImagen(): string | undefined{
        return this.imagen;
    }

    public setImagen(imagen: string): void {
        this.imagen = imagen;
    }

    public getDescripcion(): string | undefined{
        return this.descripcion;
    }

    public setDescripcion(imagen: string): void {
        this.descripcion = this.descripcion;
    }

    constructor(
        imagen?: string,
        descripcion?: string
    ) {
        this.imagen = imagen
        this.descripcion = descripcion
    }

}