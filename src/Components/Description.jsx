
import { CircularProgress } from "@mui/material";

const Description = ({ speciesInfo }) => {
    return (
        <div className="description">
            {typeof speciesInfo.flavor_text_entries !== "undefined" ? (
                <h5>{speciesInfo.flavor_text_entries[0].flavor_text}</h5>
            ) : (
                <p><CircularProgress/></p>
            )}
        </div>
    );
};
export default Description;
