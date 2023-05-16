import { useNavigate, useParams } from 'react-router-dom';
import Pokeball from '../assets/pokeball.png';
import styles from '../components/pokemon.module.css';
import Bulbasur from '../assets/bulbasaur.gif';
import { PokemonDetails } from '../types/types';
import { useState, useEffect } from 'react';
import { fetchPokemon } from '../api/fetchPokemon';
import { waitFor } from '../utils/utils';
import LoadingScream from '../components/LoadingScream';

const Pokemon = () => {
  const [isLoading, setIsLoaging] = useState(false);
  const [pokemon, setPokemon] = useState<PokemonDetails>();
  const {name} = useParams();
  const navigate = useNavigate();


  useEffect(() => {
    async function getPokemon(){
      setIsLoaging(true);
      await waitFor(800);
      const fetchedPokemon = await fetchPokemon( name as string );
      setPokemon( fetchedPokemon );
      setIsLoaging(false);
    }
    getPokemon();
  }, [name]);

  if (isLoading || !pokemon) {
    return <div><LoadingScream/></div>
    
  }

  return (
    <>
    <button className={styles.pokeballButton} onClick={() => navigate(-1)}>
      <img className={styles.pokeballImg} src={Pokeball} alt="Back" />
      Go back
    </button>
    <div className={styles.pokemon}>
      <main className={styles.pokemonInfo}>
        <div className={styles.pokemonTitle}>{pokemon?.name?.toUpperCase()}</div>
        <div>
          <strong>#{pokemon?.id}</strong>
        </div>
        <div>
          <img className={styles.pokemonInfoImg} src={pokemon?.imgSrc} alt="" />
        </div>
        <div><strong>HP:</strong> {pokemon?.hp}</div>
        <div><strong>Attack:</strong> {pokemon?.attack}</div>
        <div><strong>Defense: </strong> {pokemon?.defense}</div>
      </main>
    </div>
    </>
  );
};

export default Pokemon;