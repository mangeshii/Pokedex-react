const ThumbNail = ({ pokemonData }) => {
    return (
        <>
            {pokemonData.map((pokemon) => {
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
            })}
        </>
    );
};
export default ThumbNail;
