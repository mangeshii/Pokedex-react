import PokeButons from "./PokeButtons";

const TypeAndAbility = ({ types, abilities }) => {
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
            <div className="ability">
                <h5 className="prop_name">Ability</h5>

                {typeof abilities !== "undefined" ? (
                    abilities.map((info) => {
                        const { ability } = info;
                        const { name } = ability;
                        return (
                            <div className="lists">
                                <h5 className="value">{`${name}`}</h5>
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

export default TypeAndAbility;
