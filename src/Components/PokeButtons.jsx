const PokeButons = ({typee}) => {
    if (typee === "grass") {
        return (
            <button
                style={{
                    border: "none",
                    backgroundColor: "#78c860",
                    padding: ".2rem 1rem",
                    color: "white",
                    borderRadius: "10px",
                }}
            >
                Grass
            </button>
        );
    } else if (typee === "poison") {
        return (
            <button
                style={{
                    border: "none",
                    backgroundColor: "#a040a0",
                    padding: ".2rem 1rem",
                    color: "white",
                    margin: "0rem .2rem",
                    borderRadius: "10px",
                }}
            >
                Poison
            </button>
        );
    }
    else if (typee === "fire") {
        return (
            <button
                style={{
                    border: "none",
                    backgroundColor: "#f08030",
                    padding: ".2rem 1rem",
                    color: "white",
                    margin: "0rem .2rem",
                    borderRadius: "10px",
                }}
            >
                Fire
            </button>
        );
    }
    else if (typee === "water") {
        return (
            <button
                style={{
                    border: "none",
                    backgroundColor: "#6890f0",
                    padding: ".2rem 1rem",
                    color: "white",
                    margin: "0rem .2rem",
                    borderRadius: "10px",
                }}
            >
                Water
            </button>
        );
    }
    else if (typee === "bug") {
        return (
            <button
                style={{
                    border: "none",
                    backgroundColor: "#a8b820",
                    padding: ".2rem 1rem",
                    color: "white",
                    margin: "0rem .2rem",
                    borderRadius: "10px",
                }}
            >
                Bug
            </button>
        );
    }
    else if (typee === "normal") {
        return (
            <button
                style={{
                    border: "none",
                    backgroundColor: "#a8a878",
                    padding: ".2rem 1rem",
                    color: "white",
                    margin: "0rem .2rem",
                    borderRadius: "10px",
                }}
            >
                Normal
            </button>
        );
    }
    else if (typee === "electric") {
        return (
            <button
                style={{
                    border: "none",
                    backgroundColor: "#f8d030",
                    padding: ".2rem 1rem",
                    color: "white",
                    margin: "0rem .2rem",
                    borderRadius: "10px",
                }}
            >
                Electric
            </button>
        );
    }
    else if (typee === "ground") {
        return (
            <button
                style={{
                    border: "none",
                    backgroundColor: "#e0c068",
                    padding: ".2rem 1rem",
                    color: "white",
                    margin: "0rem .2rem",
                    borderRadius: "10px",
                }}
            >
                Ground
            </button>
        );
    }
    else if (typee === "fairy") {
        return (
            <button
                style={{
                    border: "none",
                    backgroundColor: "#ee99ac",
                    padding: ".2rem 1rem",
                    color: "white",
                    margin: "0rem .2rem",
                    borderRadius: "10px",
                }}
            >
                Fairy
            </button>
        );
    }
    else if (typee === "fighting") {
        return (
            <button
                style={{
                    border: "none",
                    backgroundColor: "#c03028",
                    padding: ".2rem 1rem",
                    color: "white",
                    margin: "0rem .2rem",
                    borderRadius: "10px",
                }}
            >
                Fighting
            </button>
        );
    }
    else if (typee === "psychic") {
        return (
            <button
                style={{
                    border: "none",
                    backgroundColor: "#f85888",
                    padding: ".2rem 1rem",
                    color: "white",
                    margin: "0rem .2rem",
                    borderRadius: "10px",
                }}
            >
                Psychic
            </button>
        );
    }
    else if (typee === "rock") {
        return (
            <button
                style={{
                    border: "none",
                    backgroundColor: "#b8a038",
                    padding: ".2rem 1rem",
                    color: "white",
                    margin: "0rem .2rem",
                    borderRadius: "10px",
                }}
            >
                Rock
            </button>
        );
    }
    else if (typee === "ghost") {
        return (
            <button
                style={{
                    border: "none",
                    backgroundColor: "#705898",
                    padding: ".2rem 1rem",
                    color: "white",
                    margin: "0rem .2rem",
                    borderRadius: "10px",
                }}
            >
                Ghost
            </button>
        );
    }
    else if (typee === "ice") {
        return (
            <button
                style={{
                    border: "none",
                    backgroundColor: "#98d8d8",
                    padding: ".2rem 1rem",
                    color: "white",
                    margin: "0rem .2rem",
                    borderRadius: "10px",
                }}
            >
                Ice
            </button>
        );
    } else if (typee === "dragon") {
        return (
            <button
                style={{
                    border: "none",
                    backgroundColor: "#7038f8",
                    padding: ".2rem 1rem",
                    color: "white",
                    margin: "0rem .2rem",
                    borderRadius: "10px",
                }}
            >
                Dragon
            </button>
        );
    }
};

export default PokeButons;