import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";


// import BulbasaurPic from "../assets/bulbasaur.gif"
import styles from "../components/pokemons.module.css";
import { fetchPokemons } from "../api/fetchPokemons";
import { Pokemon, PokemonDetails } from "../types/types";
import Pokeball from "../assets/pokeball.png";
import Flecha from "../assets/flecha.png";
import LoadingScream from "../components/LoadingScream";
import { waitFor } from "../utils/utils";


const Pokemons = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [query, setQuery] = useState("");
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const [masPkm, setMasPkm] = useState(150);
    
    
    useEffect(() => {
        const fetchAllPokemons = async () => {
            setIsLoading(true);
            await waitFor(700)
            const allPokemons = await fetchPokemons();
            setPokemons(allPokemons);
            setIsLoading(false);
        };
        fetchAllPokemons();
    }, []);
    

    const masPokemons = (num :any ) => {
        setMasPkm(masPkm + num);
    };


    if (isLoading || !pokemons) {
        return <LoadingScream></LoadingScream>
    }


    const filterPokemons = pokemons?.slice(0, 900).filter((pokemon) => {
        return (pokemon.type.at(0)?.toLocaleLowerCase().match(query.toLocaleLowerCase()) || (pokemon.name.toLowerCase().match(query.toLocaleLowerCase()) || (pokemon.type.at(1)?.toLowerCase().match(query.toLocaleLowerCase())) || pokemon.id.match(query)));
    });


    return (
        <>
            <div id="inicio"></div>
            <Header query={query} setQuery={setQuery} ></Header>

            <main className={styles.wrapper}>
                <nav >
                
                    {filterPokemons?.slice(0, masPkm).map((pokemon) => (
                        <Link
                            key={pokemon.id}
                            className={styles.listItem}
                            to={`/pokemon/${pokemon.name.toLocaleLowerCase()}`}>

                            <img
                                className={styles.listItemIcon}
                                src={pokemon.imgSrc}
                                alt={pokemon.name}
                            />

                            <div className={styles.listItemText}>
                                <span>{pokemon.name}</span>
                                <span>#{pokemon.id}
                                    <br />°{pokemon.type.at(0)}

                                    {pokemon.type.at(1)
                                        ?
                                        <p>°{pokemon.type.at(1)}</p>
                                        :
                                        <p><br /></p>
                                    }
                                </span>
                            </div>

                            <div>
                                <img className={styles.listItemIcon2} src={Pokeball} alt="pokemon" />
                            </div>
                        </Link>
                    ))}


                    <div >
                        <button className={styles.button1} onClick={() => masPokemons(+150)}>
                            
                            <div className={styles.textButton}>
                                <span>Cargar más pokemons</span>
                            </div>
                        </button>
                    </div>

                    <div className={styles.button2} >
                        <a href="#inicio">
                            <img className={styles.listItemIcon3} src={Flecha} alt="Arriba" />

                        </a>
                    </div>
                </nav>
            </main>
            <Footer></Footer>
        </>
    );
};


export default Pokemons;