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

    // const firstCharUpperCase = (namee) => {
    //     return namee.charAt(0).toUpperCase() + namee.slice(1)
    // };

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
                    <div className="poke-details-container">
                        <div className="nameandid">
                            <h1 className="name">{`${name}`}</h1>
                            <h1 className="id">{`#0${pokemonInfo.id}`}</h1>
                        </div>
                        <div className="rows">
                            <div className="height-weight">
                                <div className="height">
                                    <h4>Height</h4>
                                    <h4 className="value">{`${height}`}</h4>
                                </div>
                                <div className="weight">
                                    <h4>Weight</h4>
                                    <h4>{`${weight}`}</h4>
                                </div>
                            </div>
                            <div className="type-ability">
                                <div className="type">
                                    <h4>Type</h4>
                                    {typeof types !== "undefined" ? (
                                        types.map((info) => {
                                            const { type } = info;
                                            const { name } = type;
                                            return <h4>{`${name}`}</h4>;
                                        })
                                    ) : (
                                        <p>failed</p>
                                    )}
                                </div>
                                <div className="ability">
                                    <h4>Ability</h4>

                                    {typeof abilities !== "undefined" ? (
                                        abilities.map((info) => {
                                            const { ability } = info;
                                            const { name } = ability;
                                            return (
                                                <h4 className="abi">{` ${name}`}</h4>
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
                                    console.log(name);
                                    return (
                                        <>
                                        <div className="value">

                                            <h4 className="names">{name}</h4>
                                            <h4 className="val">{base_stat}</h4>
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
{
    /* <div className="stats">
                            <h4>Hp</h4>
                            <h4>Attack</h4>
                            <h4>Defence</h4>
                            <h4>Sp.Atk</h4>
                            <h4>Sp.Def</h4>
                        </div>; */
}
// <div className="details">
//     <div className="height-weight">
//         <div className="height">
//             <h4>Height</h4>
//             <h4 className="value">{`${height}`}</h4>
//         </div>
//         <div className="weight">
//             <h3>Weight</h3>
//             <h3>{`${weight}`}</h3>
//         </div>
//     </div>
//     <div className="type-abilities">
//         <div className="type">
//             <h3>Type</h3>
//             {typeof types !== "undefined" ? (
//                 types.map((info) => {
//                     const { type } = info;
//                     const { name } = type;
//                     return <h3>{`${name}`}</h3>;
//                 })
//             ) : (
//                 <p>failed</p>
//             )}
//         </div>
//         <div className="ability">
//             <h3>ability:</h3>
//             {typeof abilities !== "undefined" ? (
//                 abilities.map((info) => {
//                     const { ability } = info;
//                     const { name } = ability;
//                     return <h3>{` ${name}`}</h3>;
//                 })
//             ) : (
//                 <p>failed</p>
//             )}
//         </div>

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
