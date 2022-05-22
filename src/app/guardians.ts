export interface Guardian {
    name: string,
    address: string,
    photo: string,
    CNPJ: string,
}

export const guardians: Array<Guardian> = [
    {
        name: "Abrigo São João",
        address: "Manaus, AM",
        photo: "./../assets/abrigo-animais-aumigos.jpg",
        CNPJ: "1"
    }
]