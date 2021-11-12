import { CircularProgress } from "@mui/material";

const Ability = ({ abilities }) => {
    return (
        <>
            <div className="ability">
                <h5 className="prop_name">Ability</h5>

                {typeof abilities !== "undefined" ? (
                    abilities.map((info,index) => {

                        const { ability } = info;
                        const { name } = ability;
                        return (
                            <div className="lists"  key={index}>
                                <h5 className="value">{`${name}`}</h5>
                            </div>
                        );
                    })
                ) : (
                    <p><CircularProgress/></p>
                )}
            </div>
        </>
    );
};

export default Ability;
