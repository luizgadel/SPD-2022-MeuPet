export interface Chat {
    id: number,
    adopterEmail: string;
    guardianEmail: string;
}

export const chats: Array<Chat> = [
    {
        id: 1,
        adopterEmail: 'lpgds.eng16@uea.edu.br',
        guardianEmail: 'bldof.eng16@uea.edu.br'
    },
    {
        id: 2,
        adopterEmail: 'luizgadelha@hotmail.com',
        guardianEmail: 'bonifacioli@hotmail.com'
    }
]