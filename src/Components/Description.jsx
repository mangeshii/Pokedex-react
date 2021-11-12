const Description = ({ speciesInfo }) => {
    console.log(speciesInfo)
    return (
        <div className="description">
            {typeof speciesInfo.flavor_text_entries !== "undefined" ? (
                <h5>{speciesInfo.flavor_text_entries[0].flavor_text}</h5>
            ) : (
                <p>failed</p>
            )}
        </div>
    );
};
export default Description;
