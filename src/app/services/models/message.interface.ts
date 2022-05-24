export interface Message {
    id: number,
    senderEmail: string,
    chatId: number,
    content: string,
    timestamp: number,
}

export const messages = [
    {
        id: 1,
        senderEmail: "luizgadelha@hotmail.com",
        chatId: 1,
        content: "Olá, tudo bem? Gostaria de adotar o cachorrinho Soonp-Dogg. Como faço?",
        timestamp: Date.now()
    },
]