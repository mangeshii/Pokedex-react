import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Pokemon.css";

const Pokemon = (props) => {
    const [pokemonInfo, setPokemonInfo] = useState([]);
    console.log(pokemonInfo);
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
                    <div className="poke-details">
                        <div className="nameandid">
                            <h1>{`${name}`}</h1>
                            <h1>{`#0${pokemonInfo.id}`}</h1>
                        </div>
                        <div className="height-weight">
                            <div className="height">
                                <h1>height</h1>
                                <h1>{`${height}`}</h1>
                            </div>
                            <div className="weight">
                                <h1>weight</h1>
                                <h1>{`${weight}`}</h1>
                            </div>
                        </div>
                        <div className="type-abilities">
                            <div className="type">
                                <h1>Type:</h1>
                                {typeof types !== "undefined" ? (
                                    types.map((info) => {
                                        const { type } = info;
                                        const { name } = type;
                                        return <h1>{`${name}`}</h1>;
                                    })
                                ) : (
                                    <p>failed</p>
                                )}
                            </div>
                            <div className="ability">
                                <h1>ability:</h1>
                                {typeof abilities !== "undefined" ? (
                                    abilities.map((info) => {
                                        const { ability } = info;
                                        const { name } = ability;
                                        return <h1>{` ${name}`}</h1>;
                                    })
                                ) : (
                                    <p>failed</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};














{
    /* {typeof stats !== "undefined" ? (
    <>
        <div className="progress">
            <div
                className="progress-bar bg-success"
                role="progressbar"
                style={{ width: `${stats[0].base_stat}%` }}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
            ></div>
        </div>

        <div className="progress">
            <div
                className="progress-bar bg-danger"
                role="progressbar"
                style={{ width: `${stats[1].base_stat}%` }}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
            ></div>
        </div>
        <div className="progress">
            <div
                className="progress-bar bg-info"
                role="progressbar"
                style={{ width: `${stats[2].base_stat}%` }}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
            ></div>
        </div>
        <div className="progress">
            <div
                className="progress-bar bg-warning"
                role="progressbar"
                style={{ width: `${stats[3].base_stat}%` }}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
            ></div>
        </div>
        <div className="progress">
            <div
                className="progress-bar bg-primary"
                role="progressbar"
                style={{ width: `${stats[4].base_stat}%` }}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
            ></div>
        </div>
    </>
) : (
    <p></p>
)} */
}

/* <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
                alt="imaga"
            />

            <h1>{`name: ${name}`}</h1>
            <h1>{`height: ${height}`}</h1>
            <h1>{`weight: ${weight}`}</h1>
            <h1>
                {typeof types !== "undefined" ? (
                    types.map((info) => {
                        const { type } = info;
                        const { name } = type;
                        return <h1>{` types ${name}`}</h1>;
                    })
                ) : (
                    <p>failed</p>
                )}
            </h1>
            <h1>
                {typeof abilities !== "undefined" ? (
                    abilities.map((info)=>{
                        const {ability}=info;
                        const {name}=ability
                        return <h1>{`abilities ${name}`}</h1>
                    })

                ):(<p>failed</p>)}
            </h1>
            */

export default Pokemon;
