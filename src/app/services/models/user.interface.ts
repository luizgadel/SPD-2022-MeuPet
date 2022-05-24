export interface User {
    name: string,
    email: string,
    password: string,
    address: string,
    telephone: string;
    photo: string
}

export const guardians: Array<User> = [
    {
        name: "Pedro Silva",
        email: "pedrosilva@email.com",
        password: "pedro123",
        address: "Manaus, AM",
        telephone: "",
        photo: "./../assets/abrigo-animais-aumigos.jpg",
    }
]