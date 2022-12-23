import { Link } from "react-router-dom";

function FooterBtns({number ,next ,errorMassage}) {

    const handleNextError= ()=>{
        if(number<3){
            next?errorMassage(false):errorMassage(true)
        }else{
            null
        }
    }

    return (
        <div className="buttons">
            { number > 1 
            && <Link to={number-1 ===1 ? "/" : `/step${number-1}`}>
                <button className="go-back-btn">Go Back</button>
            </Link>}

            {number < 4 
            && <Link to={next&&`/step${number+1}`} className="next" >
                <button className="submit-btn" type="submit" onClick={handleNextError}>Next Step</button>
            </Link>}

            {number===4 
            && <Link to="/finish" className="next" >
                <button className="submit-btn confirm-btn" type="submit">Confirm</button>
            </Link>}
        </div>
    );
}

export default FooterBtns;