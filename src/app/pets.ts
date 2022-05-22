export interface Pet {
    RGA: number;
    name: string;
    desc: string;
    photo: string;
    guardianCNPJ: string;
}

export const pets: Array<Pet> = [
    {
        RGA: 1172432148,
        name: "Soonp-Dogg",
        desc: "Muito estiloso. Latidos contagiosos.",
        photo: "./../assets/snoop-catioro.png",
        guardianCNPJ: "1"
    },
    {
        RGA: 7586561254,
        name: "Vana",
        desc: "Uma bebê carente. Adora dormir no colo.",
        photo: "./../assets/vana.jpg",
        guardianCNPJ: "1"
    },
    {
        RGA: 2957129713,
        name: "Pérola",
        desc: "Animada, se der corda ela brinca o dia inteiro.",
        photo: "./../assets/perola.jpg",
        guardianCNPJ: "1"
    },
    {
        RGA: 9851357132,
        name: "Apollo",
        desc: "Gatinho fofo. Só não gosta de carinho na barriga.",
        photo: "./../assets/apollo.jpg",
        guardianCNPJ: "1"
    }
]