export interface Pet {
    RGA: number;
    name: string;
    photo: string;
    desc: string;
    species: string;
    age: number;
    gender: string;
    castrated: boolean;
    wormed: boolean;
    vacinated: boolean;
    value: number;
    guardianCNPJ: string;
}

export const pets: Array<Pet> = [
    {
        RGA: 1172432148,
        name: "Soonp-Dogg",
        photo: "./../assets/snoop-catioro.png",
        desc: "Muito estiloso. Latidos contagiosos.",
        species: "Cachorro",
        age: 5,
        gender: "masc",
        castrated: true,
        wormed: true,
        vacinated: true,
        value: 0.0,
        guardianCNPJ: "1"
    },
    {
        RGA: 7586561254,
        name: "Vana",
        photo: "./../assets/vana.jpg",
        desc: "Uma bebê carente. Adora dormir no colo.",
        species: "Gato",
        age: 0.8333,
        gender: "fem",
        castrated: false,
        wormed: false,
        vacinated: false,
        value: 1000000000.0,
        guardianCNPJ: "1"
    },
    {
        RGA: 2957129713,
        name: "Pérola",
        desc: "Animada, se der corda ela brinca o dia inteiro.",
        species: "Cachorro",
        photo: "./../assets/perola.jpg",
        castrated: true,
        age: 4,
        gender: "fem",
        wormed: true,
        vacinated: true,
        value: 1000000000.0,
        guardianCNPJ: "1"
    },
    {
        RGA: 9851357132,
        name: "Apollo",
        photo: "./../assets/apollo.jpg",
        desc: "Gatinho fofo. Só não gosta de carinho na barriga.",
        species: "Gato",
        age: 6,
        gender: "masc",
        castrated: true,
        wormed: true,
        vacinated: true,
        value: 1000000000.0,
        guardianCNPJ: "1"
    }
]