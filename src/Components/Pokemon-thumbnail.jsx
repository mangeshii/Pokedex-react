import "./Pokedex.css";
import { Link } from "react-router-dom";

const ThumbNail = ({ id, name, image }) => {
    return (
        <>
            <Link className="link" to={`/pokemon/${id}`}>
                <div className="col">
                    <div className="cols ">
                        <img
                            className="thumbnail img-fluid mb-4 mt-4"
                            src={image}
                            alt="img"
                        />
                        <div className="name-container py-1 ">
                            <h5 className="poke-name">{name}</h5>
                            <p className="poke-id">{`#0${id}`}</p>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    );
};
export default ThumbNail;
