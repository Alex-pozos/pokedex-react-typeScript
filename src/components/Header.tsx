import styles from './header.module.css';
import Search from '../assets/search.png';

type HeaderPromp = {
    query: string;
    setQuery: (Query: string) => void;
}

const Header = ({ query, setQuery }: HeaderPromp) => {

    return (
        <header className={styles.header}>
                <input className={styles.input} type="text" placeholder="Search Pokemons 👾" value={query}
                    onChange={(event) => setQuery(event.target.value)}
                />
        </header>

    );

};

export default Header;