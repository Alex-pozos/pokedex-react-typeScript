
import { Pokemon } from "../types/types";
import { formatPokemonsName } from "../utils/utils";


export async function  fetchPokemons(): Promise <Pokemon[]> {
    const response = await fetch(
        "https://unpkg.com/pokemons@1.1.0/pokemons.json"
        );
        if (!response.ok) {
            throw new Error(response.statusText);
        }
    const results = await response.json();   
    

    const pokemons = results.results.map((pokemon:any) => ({
        name: pokemon.name,
        id: pokemon.national_number,
        imgSrc: `https://img.pokemondb.net/sprites/black-white/anim/normal/${formatPokemonsName (pokemon.name.toLocaleLowerCase())}.gif`,
        type: pokemon.type
    }));
    const uniquePokemons = pokemons.filter(
        (pokemon: any, index: number) => 
        pokemons.findIndex((other: any) => other.id === pokemon.id) === index
        );
    return uniquePokemons;
}