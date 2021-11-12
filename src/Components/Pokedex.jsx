import "./Pokedex.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import ThumbNail from "./Pokemon-thumbnail";

const Pokedex = () => {
    const [pokemonData, setPokemonData] = useState([]);
    const [loadMore, setLoadMore] = useState(
        "https://pokeapi.co/api/v2/pokemon?limit=12"
    );

    const fetchApi = async () => {
        try {
            const response = await fetch(loadMore);
            const data = await response.json();

            setLoadMore(data.next);

            const createPokemonObject = (result) => {
                result.forEach(async (pokemon) => {
                    const response = await fetch(
                        `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
                    );
                    const data = await response.json();

                    setPokemonData((currentList) => [...currentList, data]);
                });
            };
            createPokemonObject(data.results);
        } catch (e) {
            console.log(`error is ${e}`);
        }
    };

    useEffect(() => {
        fetchApi();
    },[]);  // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <>
            <h1 className="pokedex">POKEDEX</h1>
            <div className="containers">
                <div className="row row-cols-2 row-cols-lg-4 g-2 g-lg-4 ">
                    {pokemonData.map((pokemon, index) => {
                        return (
                            <ThumbNail
                                id={pokemon.id}
                                name={pokemon.name}
                                image={
                                    pokemon.sprites.other.dream_world
                                        .front_default
                                }
                                key={index}
                            />
                        );
                    })}
                </div>
            </div>
            <div className="btn">
                <button
                    className="load-more btn-grad "
                    onClick={() => fetchApi()}
                >
                    Load
                </button>
            </div>
        </>
    );
};

export default Pokedex;
