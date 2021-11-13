import "./Pokedex.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import ThumbNail from "./Pokemon-thumbnail";
import { CircularProgress } from "@mui/material";

const Pokedex = ({ darkMode }) => {
    let offset = 0;
    const [pokemonData, setPokemonData] = useState([]);
    const [noData, setNoData] = useState(false);

    const fetchApi = async () => {
        try {
            const response = await fetch(
                `https://pokeapi.co/api/v2/pokemon?limit=16&offset=${offset}`
            );
            const data = await response.json();
            if (data.results.length < 16) {
                setNoData(true);
            }
            const createPokemonObject = (result) => {
                result.forEach(async (pokemon) => {
                    const response = await fetch(
                        `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
                    );
                    const data = await response.json();
                    setPokemonData((currentList) => [...currentList, data]);
                });
                offset += 16;
            };
            createPokemonObject(data.results);
            // iife
        } catch (e) {
            console.log(`error is ${e}`);
        }
    };

    const handleScroll = (e) => {
        if (
            window.innerHeight + e.target.documentElement.scrollTop + 1 >=
            e.target.documentElement.scrollHeight
        ) {
            if (!noData) {
                fetchApi();
            }
        }
    };

    useEffect(() => {
        fetchApi();
        window.addEventListener("scroll", handleScroll);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

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
                                darkMode={darkMode}
                            />
                        );
                    })}
                </div>
            </div>
            {noData ? (
                <h3 style={{textAlign:'center',margin:'3rem'}}>Yay! you have reached the end of data</h3>
            ) : (
                <div className="circular-progress" style={{textAlign:'center',width:'100%'}}>

                <CircularProgress />
                </div>
            )}
        </>
    );
};

export default Pokedex;
