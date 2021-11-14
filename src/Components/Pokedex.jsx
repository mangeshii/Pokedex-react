import "./Pokedex.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import ThumbNail from "./Pokemon-thumbnail";
import { CircularProgress } from "@mui/material";

const Page_Num=0;
const Pokedex = () => {
    const [pokemonData, setPokemonData] = useState([]);
    const [darkMode, setDarkMode] = useState(false);
    let [page, setPage] = useState(Page_Num);
    const [isLoading, setLoading] = useState(true);

    const GetPokemonData = async () => {
        try {
            setLoading(true);
            const response = await fetch(
                `https://pokeapi.co/api/v2/pokemon?limit=16&offset=${page}`
            );
            const data = await response.json();
            setLoading(false);

            const createPokemonObject = async (result) => {
                const arrOfPokemonData = await Promise.all(result);
                for (let i = 0; i < arrOfPokemonData.length; i++) {
                    try {
                        const response = await fetch(arrOfPokemonData[i].url);
                        const data = await response.json();
                        setPokemonData((currentList) => [...currentList, data]);
                    } catch (e) {
                        console.log(`error is ${e}`);
                    }
                }
            };
            createPokemonObject(data.results);
        } catch (e) {
            console.log(`error is ${e}`);
        }
    };

    const scrollToEnd = () => {
        setPage(page += 16);
    };

    window.onscroll = function () {
        if (
            window.innerHeight + document.documentElement.scrollTop ===
            document.documentElement.offsetHeight
        ) {
            scrollToEnd();
        }
    };

    useEffect(() => {
        GetPokemonData();
    }, [page]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <>
            <div className={darkMode ? "App app-dark" : "App"}>
                <div className="main-container">
                    <div className="header">
                        <h1 className="pokedex">POKEDEX</h1>
                        <div className="form-check form-switch">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                role="switch"
                                id="flexSwitchCheckDefault"
                                onChange={() => setDarkMode(!darkMode)}
                            />
                        </div>
                    </div>
                    <div className="containers" style={{ padding: "1rem" }}>
                        {" "}
                        <div className="row row-cols-2 row-cols-lg-4 g-4 g-lg-4 ">
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
                </div>
            </div>
            {isLoading ? <CircularProgress /> : " "}
        </>
    );
};

export default Pokedex;
