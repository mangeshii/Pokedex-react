const PokeImage=({id})=>{
    return(
        <img
        className="pokemon-img img-fluid"
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
        alt="pokemon"
    />
    )
}
export default PokeImage