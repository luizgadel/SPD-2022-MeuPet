export interface User {
    name: string,
    email: string,
    password: string,
    address: string,
    telephone: string;
    photo: string
}

export const users: Array<User> = [
    {
        name: "Pedro Silva",
        email: "pedrosilva@email.com",
        password: "pedro123",
        address: "Manaus, AM",
        telephone: "",
        photo: "",
    }
]