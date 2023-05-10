
export class Articulo {

    private id: number;
    private nombre: string;
    private precio: number;
    private descripcion?: string;
    private tallas?: string;
    private fav?: string;
    private imagen?: string;

    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    public getPrecio(): number {
        return this.precio;
    }

    public setPrecio(precio: number): void {
        this.precio = precio;
    }

    public getDescripcion(): string | undefined {
        return this.descripcion;
    }

    public setDescripcion(descripcion: string): void {
        this.descripcion = descripcion;
    }

    public getTallas(): string | undefined{
        return this.tallas;
    }

    public setTallas(tallas: string): void {
        this.tallas = tallas;
    }

    public getFav(): string | undefined{
        return this.fav;
    }

    public setFav(fav: string): void {
        this.fav = fav;
    }

    public getImagen(): string | undefined{
        return this.imagen;
    }

    public setImagen(imagen: string): void {
        this.imagen = imagen;
    }

    constructor(
        id: number,
        nombre: string,
        precio: number,
        descripcion?: string,
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