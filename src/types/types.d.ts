
export type Pokemon = {
    name: string;
    id: string;
    imgSrc: string;
    type: string[];
}

export type PokemonDetails = {
    name: string;
    id: string;
    imgSrc: string;
    type: string[];
    hp: number;
    attack: number;
    defense: number;
}