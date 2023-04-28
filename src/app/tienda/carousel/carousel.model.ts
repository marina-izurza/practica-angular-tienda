export class Carousel {

    private id: number
    private imagen?: string

    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getImagen(): string | undefined{
        return this.imagen;
    }

    public setImagen(imagen: string): void {
        this.imagen = imagen;
    }

    constructor(
        id: number,
        imagen?: string
    ) {
        this.id = id
        this.imagen = imagen
    }

}