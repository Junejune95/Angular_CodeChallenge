export interface Book{
    id:string,
    title:string,
    subtitle?:string | undefined,
    description?:string | undefined,
    image:string,
    authors?:string[] | undefined
}