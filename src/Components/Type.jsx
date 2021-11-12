import PokeButons from "./PokeButtons";

const Type = ({ types }) => {
    return (
        <>
            <div className="types">
                <h5 className="prop_name">Type</h5>
                {typeof types !== "undefined" ? (
                    types.map((info) => {
                        const { type } = info;
                        const { name } = type;

                        return (
                            <div className="poke-buttons-wrapper">
                                <PokeButons name={name} />
                            </div>
                        );
                    })
                ) : (
                    <p>failed</p>
                )}
            </div>
        </>
    );
};
export default Type;
