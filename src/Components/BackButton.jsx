import back from "../Images/back.png";
import {Link} from 'react-router-dom'

const BackButton=()=>{
    return(
        <>
        <div className="back-button">
            <Link to={'/'}>

            <img src={back} alt="button" style={{height:'2rem',margin:'2rem'}} />
            </Link>
        </div>
        </>
    )
}
export default BackButton

