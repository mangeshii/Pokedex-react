import TextField from "@mui/material/TextField";
import Style from "../Styles/Style";

const Search = () => {
    const classNamees = Style();
    return (
        <>
            <TextField
                className={classNamees.root}
                id="standard-basic"
                variant="standard"
                fullWidth
                placeholder="Search"

            />

        </>
    );
};

export default Search;
