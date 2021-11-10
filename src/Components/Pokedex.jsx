import "./Pokedex.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import ThumbNail from "./Pokemon-thumbnail";

const Pokedex = () => {
    const [pokemonData, setPokemonData] = useState([]);
    console.log(pokemonData);

    const fetchApi = async () => {
        try {
            const response = await fetch(
                "https://pokeapi.co/api/v2/pokemon?limit=17"
            );
            const data = await response.json();

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
                <ThumbNail pokemonData={pokemonData}/>
                    {/* {pokemonData.map((pokemon) => {
                        return (
                            <div className="col ">
                                <div className="p-3 border bg-light">
                                    <img
                                        src={
                                            pokemon.sprites.other.dream_world
                                                .front_default
                                        }
                                        alt="img"
                                    ></img>
                                </div>
                            </div>
                        );
                    })} */}
                </div>
            </div>
        </>
    );
};

export default Pokedex;
