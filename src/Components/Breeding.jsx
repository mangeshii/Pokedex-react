import female from "../Images/femenine.png";
import male from "../Images/male.png";
import { CircularProgress } from "@mui/material";

const Breeding = ({ speciesInfo, egg_groups, gender_rate }) => {
    return (
        <>
            <h3 className="breeding-heading">Breeding</h3>
            <div className="capture_rate">
                <h5 className="prop_name">Capture</h5>
                <h5 className="value">
                    {((speciesInfo.capture_rate / 255) * 100).toFixed(0) + "%"}
                </h5>
            </div>
            <div className="egg_group">
                <h5 className="prop_name">Egg Grp</h5>

                {typeof egg_groups !== "undefined" ? (
                    egg_groups.map((info,index) => {
                        const { name } = info;
                        return <h5 className="value" key={index}>{name}</h5>;
                    })
                ) : (
                    <p><CircularProgress/></p>
                )}
            </div>
            <div className="gender">
                <h5 className="prop_name">Gender</h5>
                <h5 className="value">
                    <img
                        className="img-fluid"
                        src={female}
                        alt="female"
                        style={{ height: "1.5rem" }}
                    />
                    {12.5 * gender_rate + "%"}
                </h5>
                <img src={male} alt="male" style={{ height: "1.5rem" }} />
                <h5 className="value">{12.5 * (8 - gender_rate) + "%"}</h5>
            </div>
        </>
    );
};
export default Breeding;
