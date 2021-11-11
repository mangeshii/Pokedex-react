import PokeButons from "./PokeButtons";

const TypeAndAbility = ({ types, abilities }) => {
    return (
        <>
            <div className="type">
                <h4>Type</h4>
                {typeof types !== "undefined" ? (
                    types.map((info) => {
                        const { type } = info;
                        const { name } = type;
                        return <PokeButons name={name}/>;
                    })
                ) : (
                    <p>failed</p>
                )}
            </div>
            <div className="ability">
                <div className="abilities">
                    <h4>Ability</h4>
                </div>

                {typeof abilities !== "undefined" ? (
                    abilities.map((info) => {
                        const { ability } = info;
                        const { name } = ability;
                        return (
                            <div className="lists">
                                <h5>{`${name}`}</h5>
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
