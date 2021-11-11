import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Pokemon = (props) => {
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

    return (
        <>
            <div className="pokemon-container">

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
