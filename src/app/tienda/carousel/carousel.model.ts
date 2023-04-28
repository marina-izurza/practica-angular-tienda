export class Carousel {

    private imagen?: string

    public getImagen(): string | undefined{
        return this.imagen;
    }

    public setImagen(imagen: string): void {
        this.imagen = imagen;
    }

    constructor(
        imagen?: string
    ) {
        this.imagen = imagen
    }

}