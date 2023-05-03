export class Tienda {

    private idCategoria?: number
    private idArticulo?: number
    private imagen?: string
    private descripcion?: string

    public getIdCategoria(): number | undefined {
        return this.idCategoria;
    }

    public setIdCategoria(value: number | undefined) {
        this.idCategoria = value;
    }

    public getIdArticulo(): number | undefined {
        return this.idArticulo;
    }

    public setIdArticulo(value: number | undefined) {
        this.idArticulo = value;
    }

    public getImagen(): string | undefined {
        return this.imagen;
    }

    public setImagen(value: string | undefined) {
        this.imagen = value;
    }

    public getDescripcion(): string | undefined {
        return this.descripcion;
    }

    public setDescripcion(value: string | undefined) {
        this.descripcion = value;
    }

    constructor(
        idCategoria?: number,
        idArticulo?: number,
        imagen?: string,
        descripcion?: string
    ) {
        this.idCategoria = idCategoria
        this.idArticulo = idArticulo
        this.imagen = imagen
        this.descripcion = descripcion
    }

}