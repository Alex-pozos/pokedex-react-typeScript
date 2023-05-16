import React from 'react';
import styles from './footer.module.css';
import { Link } from 'react-router-dom';
//**Importaciones desde el asset */
import PokemonPic from "../assets/pikachu.png";
import LocationPic from "../assets/pointer.png";
import ItemPic from "../assets/pokeball.png";

const Footer = () => {

    return (      
        <footer className={styles.footer}>
            <Link className={styles.footerLink} to="/pokemons">
                <img className={styles.footerIcon} src={PokemonPic} alt="Pokeball" />Pokemons
            </Link>
            <Link className={styles.footerLink} to="/items">
                <img className={styles.footerIcon} src={ItemPic} alt="Pokeball" />Items
            </Link>
            <Link className={styles.footerLink} to="/pokemons">
                <img className={styles.footerIcon} src={LocationPic} alt="Pokeball" />Map
            </Link>
        </footer>
        
        );

};

export default Footer;