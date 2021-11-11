const PokeButons = ({ name }) => {
    console.log(name)
    if (name === "grass") {
        return (
            <button
                className="type"
                style={{
                    border: "none",
                    backgroundColor: "#78c860",
                    padding: ".2rem 1rem",
                    margin: "0rem .2rem",
                    color: "white",
                    borderRadius: "10px",
                }}
            >
                Grass
            </button>
        );
    } else if (name === "poison") {
        return (
            <button
                className="type"
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
    } else if (name === "fire") {
        return (
            <button
                className="type"
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
    } else if (name === "water") {
        return (
            <button
                className="type"
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
    } else if (name === "bug") {
        return (
            <button
                className="type"
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
    } else if (name === "normal") {
        return (
            <button
                className="type"
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
    } else if (name === "electric") {
        return (
            <button
                className="type"
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
    } else if (name === "ground") {
        return (
            <button
                className="type"
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
    } else if (name === "fairy") {
        return (
            <button
                className="type"
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
    } else if (name === "fighting") {
        return (
            <button
                className="type"
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
    } else if (name === "psychic") {
        return (
            <button
                className="type"
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
    } else if (name === "rock") {
        return (
            <button
                className="type"
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
    } else if (name === "ghost") {
        return (
            <button
                className="type"
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
    } else if (name === "ice") {
        return (
            <button
                className="type"
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
    } else if (name === "dragon") {
        return (
            <button
                className="type"
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
