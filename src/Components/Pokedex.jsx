import "./Pokedex.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import ThumbNail from "./Pokemon-thumbnail";

const Pokedex = () => {
    const [pokemonData, setPokemonData] = useState([]);
    const [loadMore, setLoadMore] = useState(
        "https://pokeapi.co/api/v2/pokemon?limit=12"
    );
    console.log(pokemonData);

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
    }, []);

    return (
        <>
            <div className="containers">
                <div className="row row-cols-2 row-cols-lg-4 g-2 g-lg-3 ">
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
                <button onClick={() => fetchApi()}>Load More</button>
            </div>
        </>
    );
};

export default Pokedex;
