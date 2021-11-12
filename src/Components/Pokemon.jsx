import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Ability from "./Ability";
import HeighAndWeight from "./Height&Weight";
import ProgressBar from "./ProgressBar";
import Tabs from "./Tabs";
import "./Pokemon.css";
import Description from "./Description";
import NameAndId from "./NameAndId";
import Breeding from "./Breeding";
import Type from "./Type"
import PokeImage from "./poke_Image";
import BackButton from "./BackButton";

const Pokemon = () => {
    const [pokemonInfo, setPokemonInfo] = useState([]);
    const [speciesInfo, setSpeciesInfo] = useState([]);
    const [value, setValue] = useState("1");

    // changing the tabs
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    // To get the id of particular pokedex
    const pokemonid = useParams();
    const { id } = pokemonid;
    const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${id}/`;

    // pokemon species url
    const pokemonSpeciesUrl = `https://pokeapi.co/api/v2/pokemon-species/${id}/`;

    // Fetching the data from Api
    const PokemonDetails = async () => {
        try {
            const response = await fetch(pokemonUrl);
            const data = await response.json();
            setPokemonInfo(data);
        } catch (e) {
            setPokemonInfo(false);
        }
    };

    const PokemonSpeciesDetails = async () => {
        try {
            const species_response = await fetch(pokemonSpeciesUrl);
            const species_data = await species_response.json();
            setSpeciesInfo(species_data);
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        PokemonSpeciesDetails();
        PokemonDetails();
    }, [id]);

    // destructuring
    const { name, height, weight, types, abilities, stats } = pokemonInfo;
    const { egg_groups, gender_rate } = speciesInfo;

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
                    <div className="back-btn">

                    <BackButton/>
                    </div>
                        <PokeImage id={id}/>
                    </div>

                    <div className="tabs">
                        <Tabs
                            value={value}
                            handleChange={handleChange}
                            new_poke_height={new_poke_height}
                            poke_height_m={poke_height_m}
                            poke_weight_kg={poke_weight_kg}
                            poke_weight_lbs={poke_weight_lbs}
                            stats={stats}
                            types={types}
                            abilities={abilities}
                            speciesInfo={speciesInfo}
                            name={name}
                            pokemonInfo={pokemonInfo}
                            egg_groups={egg_groups}
                            gender_rate={gender_rate}
                            id={id}
                        />
                    </div>

                    <div className="poke-details-container">
                        <div className="nameandid">
                            <NameAndId name={name} pokemonInfo={pokemonInfo} />
                        </div>
                        <div className="rows">
                            <div className="height-weight">
                                <HeighAndWeight
                                    new_poke_height={new_poke_height}
                                    poke_height_m={poke_height_m}
                                    poke_weight_kg={poke_weight_kg}
                                    poke_weight_lbs={poke_weight_lbs}
                                />
                            </div>
                            <div className="type-ability">
                            <Type types={types}/>
                                <Ability
                                    types={types}
                                    abilities={abilities}
                                />
                            </div>
                            <div className="description-cont">
                                <Description speciesInfo={speciesInfo} />
                            </div>
                            <div className="breeding-container">
                                <Breeding
                                    speciesInfo={speciesInfo}
                                    egg_groups={egg_groups}
                                    gender_rate={gender_rate}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="progress-bar-wrapper">
                    <ProgressBar stats={stats} />
                </div>
            </div>
        </>
    );
};

export default Pokemon;
