import { Button } from "bootstrap";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Pokemon.css";
import PokeButons from "./PokeButtons";

const Pokemon = () => {
    const [pokemonInfo, setPokemonInfo] = useState([]);
    const pokemonid = useParams();
    const { id } = pokemonid;

    const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${id}/`;

    const PokemonDetails = async () => {
        try {
            const response = await fetch(pokemonUrl);
            const data = await response.json();
            setPokemonInfo(data);
        } catch (e) {
            setPokemonInfo(false);
        }
    };

    useEffect(() => {
        PokemonDetails();
    }, [id]);

    const { name, height, weight, types, abilities, stats } = pokemonInfo;

    //covert decimeter to feet and meter
    const poke_height_ft = (height * 0.328083).toFixed(1);
    const new_poke_height = poke_height_ft.split(".").join("'");
    const poke_height_m = (height * 0.1).toFixed(0);

    // convert hectograms to kg and lbs
    const poke_weight_kg = (weight / 10).toFixed(0);
    const poke_weight_lbs = (weight * 0.22046).toFixed(1);


    return (
        <>
            <div className="pokemon-container">
                <div className="cont">
                    <div className="image-cont">
                        <img
                            className="pokemon-img"
                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
                            alt="pokemon"
                        />
                    </div>
                    <div className="poke-details-container">
                        <div className="nameandid">
                            <h1 className="name">{`${name}`}</h1>
                            <h1 className="id">{`#0${pokemonInfo.id}`}</h1>
                        </div>
                        <div className="rows">
                            <div className="height-weight">
                                <div className="height">
                                    <h4>Height</h4>
                                    <h5 className="value">{`${new_poke_height}"  (${poke_height_m}m)`}</h5>
                                </div>
                                <div className="weight">
                                    <h4>Weight</h4>
                                    <h5>{` ${poke_weight_lbs}lbs (${poke_weight_kg}kg )`}</h5>
                                </div>
                            </div>
                            <div className="type-ability">
                                <div className="type">
                                    <h4>Type</h4>
                                    {typeof types !== "undefined" ? (
                                        types.map((info) => {
                                            const { type } = info;
                                            const { name } = type;
                                            return (<PokeButons typee={name}/>);
                                        })
                                    ) : (
                                        <p>failed</p>
                                    )}
                                </div>
                                <div className="ability">
                                    <div className="abilities">
                                        <h4>Ability</h4>
                                    </div>

                                    {typeof abilities !== "undefined" ? (
                                        abilities.map((info) => {
                                            const { ability } = info;
                                            const { name } = ability;
                                            return (
                                                <div className="lists">
                                                    <h5>{`${name}`}</h5>
                                                </div>
                                            );
                                        })
                                    ) : (
                                        <p>failed</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="wrapper">
                    <div className="stats-name">
                        {typeof stats !== "undefined" ? (
                            <>
                                {stats.map((info) => {
                                    const { base_stat } = info;
                                    const { stat } = info;
                                    const { name } = stat;
                                    return (
                                        <>
                                            <div className="value">
                                                <h4 className="names">
                                                    {name}
                                                </h4>
                                                <h4 className="val">
                                                    {base_stat}
                                                </h4>
                                            </div>
                                        </>
                                    );
                                })}
                            </>
                        ) : (
                            <></>
                        )}
                    </div>

                    {typeof stats !== "undefined" ? (
                        <>
                            <div className="progess-bar-wrapper">
                                <div className="progress">
                                    <div
                                        className="progress-bar bg-success"
                                        role="progressbar"
                                        style={{
                                            width: `${stats[0].base_stat}%`,
                                            height: "3rem",
                                        }}
                                        aria-valuenow="25"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                    ></div>
                                </div>

                                <div className="progress">
                                    <div
                                        className="progress-bar bg-danger"
                                        role="progressbar"
                                        style={{
                                            width: `${stats[1].base_stat}%`,
                                        }}
                                        aria-valuenow="25"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                    ></div>
                                </div>
                                <div className="progress">
                                    <div
                                        className="progress-bar bg-info"
                                        role="progressbar"
                                        style={{
                                            width: `${stats[2].base_stat}%`,
                                        }}
                                        aria-valuenow="25"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                    ></div>
                                </div>
                                <div className="progress">
                                    <div
                                        className="progress-bar bg-warning"
                                        role="progressbar"
                                        style={{
                                            width: `${stats[3].base_stat}%`,
                                        }}
                                        aria-valuenow="25"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                    ></div>
                                </div>
                                <div className="progress">
                                    <div
                                        className="progress-bar bg-primary"
                                        role="progressbar"
                                        style={{
                                            width: `${stats[4].base_stat}%`,
                                        }}
                                        aria-valuenow="25"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                    ></div>
                                </div>
                                <div className="progress">
                                    <div
                                        className="progress-bar bg-secondary"
                                        role="progressbar"
                                        style={{
                                            width: `${stats[5].base_stat}%`,
                                        }}
                                        aria-valuenow="25"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                    ></div>
                                </div>
                            </div>
                        </>
                    ) : (
                        <p></p>
                    )}
                </div>
            </div>
        </>
    );
};

export default Pokemon;
