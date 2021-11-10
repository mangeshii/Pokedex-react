import "./Pokedex.css";

const ThumbNail = ({ id, name, image }) => {
    return (
        <>
            <div className="col">
                <div className="cols border">
                    <img
                        className="thumbnail img-fluid mb-4 mt-4"
                        src={image}
                        alt="img"
                    />
                    <div className="name-cont py-1 ">
                        <h5 className="name">{name}</h5>
                        <p className="id">{`#0${id}`}</p>
                    </div>
                </div>
            </div>
        </>
    );
};
export default ThumbNail;
