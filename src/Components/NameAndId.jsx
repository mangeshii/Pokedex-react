const NameAndId = ({ name, pokemonInfo }) => {
    return (
        <>
            <h1 className="name">{`${name}`}</h1>
            <h1 className="id">{`#0${pokemonInfo.id}`}</h1>
        </>
    );
};
export default NameAndId;
