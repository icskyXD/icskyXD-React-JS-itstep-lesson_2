export interface IUser {
    email: string,
    id: number,
    name: string,
    phone: string,
    username: string,
    website: string,
}

export interface IPost {
    title: string,
    body: string,
    id: number,
    userId: number
}

export interface IPeople {
    name: string,
    height: string,
    mass: string,
    hair_color: string,
    skin_color: string,
    eye_color: string,
    birth_year: string,
    url: string,
}