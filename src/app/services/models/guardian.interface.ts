import { User } from "./user.interface";

export interface Guardian extends User{
    CNPJ: string,
    category: string,
    CMVS: string,
    CMCA: string,
}

export const guardians: Array<Guardian> = [
    {
        name: "Abrigo São João",
        email: "saojoao@pets.com",
        password: "saojoao123",
        address: "Manaus, AM",
        telephone: "",
        photo: "./../assets/abrigo-animais-aumigos.jpg",
        CNPJ: "1",
        category: "Abrigo",
        CMVS: "",
        CMCA: "",
    }
]