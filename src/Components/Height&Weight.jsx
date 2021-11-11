const HeighAndWeight = ({
    new_poke_height,
    poke_height_m,
    poke_weight_kg,
    poke_weight_lbs,
}) => {
    return (
        <>
            <div className="height">
                <h4>Height</h4>
                <h5 className="value">{`${new_poke_height}"  (${poke_height_m}m)`}</h5>
            </div>
            <div className="weight">
                <h4>Weight</h4>
                <h5 className="value">{` ${poke_weight_lbs}lbs (${poke_weight_kg}kg )`}</h5>
            </div>
        </>
    );
};
export default HeighAndWeight;
