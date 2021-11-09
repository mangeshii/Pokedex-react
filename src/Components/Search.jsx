import TextField from "@mui/material/TextField";
import Style from "../Styles/Style";

const Search = () => {
    const classes = Style();
    return (
        <>
            <TextField
                className={classes.root}
                id="standard-basic"
                variant="standard"
                fullWidth

            />

        </>
    );
};

export default Search;
