import { NavLink } from "react-router-dom";

function Steps() {
    const stepsInfo=[
        {id:1,title:"your info"},
        {id:2,title:"select plan"},
        {id:3,title:"add-ons"},
        {id:4,title:"summary"}
    ]

    return (
        <section className="steps-section" >
            {stepsInfo.map((el)=>{
                return (
                    <NavLink className="step"
                        key={el.id} 
                        to={el.id<2 ? "/form" : `/step${el.id}`}>
                        <div className="number" >{el.id}</div>
                        <div className="content" >
                            <p>Step {el.id}</p>
                            <h3>{el.title}</h3>
                        </div>
                    </NavLink>
                )
            })}
        </section>
    );
}

export default Steps