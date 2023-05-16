import React from 'react'
import Pokedex from "../assets/pokedex.png";
import styles from "./LoadingScreem.module.css";

const LoadingScream = () => {
    return (
        <div className={styles.loadingScream}>
            <img className={styles.loadingScreamIcon} src={Pokedex} alt="Pokedex" />
        </div>
    );

};

export default LoadingScream;

