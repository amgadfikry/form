import { useEffect } from "react";
import FooterBtns from "../pattern/footterBtns";
import Header from "../pattern/header";

function Step3({money,setMoney ,plan,selectedAddOns,setSelectedAddOns}) {
    const stepThreeH1 =" Pick add-ons"
    const stepThreePara="Add-ons help enhance your gaming experience"
    const addOns = [
        {
            id:1,
            title:"Online service",
            info:"Access to multiplayer games",
            price:10,
        },
        {
            id:2,
            title:"Large storage",
            info:"Extra 1Tb of cloud save",
            price:20,
        },
        {
            id:3,
            title:"Customizable profile",
            info:"Custom theme onyour profile",
            price:20,
        }
    ]

    const handleSelect=(e,el) =>{
        const price = plan ==="Monthly" ? el.price/10 : el.price
        if(selectedAddOns.includes(el.id)){
            setSelectedAddOns(selectedAddOns.filter(sl=>sl!==el.id))
            setMoney({...money,addOns:(money.addOns-price),details:money.details.filter(det=>det.id!==el.id)})
        }else{
            setSelectedAddOns([...selectedAddOns,el.id])
            setMoney({...money,addOns:(money.addOns+price),details:[...money.details,{id:el.id,name:el.title,price:price}]})
        }
    }

    return (
        <>
            <Header h1={stepThreeH1} para={stepThreePara} />
            <div className="box-cont" >
                {addOns.map(el=>{
                    return (
                        <label className={`box ${selectedAddOns.includes(el.id) && "box-active"}`}
                            key={el.id} htmlFor={`box${el.id}`} >
                            <input id={`box${el.id}`} type="checkbox" 
                                onChange={(e)=>{handleSelect(e,el)}} 
                                checked={selectedAddOns.includes(el.id) ? true : false}
                                ></input>
                            <div className="content">
                                <h4>{el.title}</h4>
                                <p>{el.info}</p>
                            </div>
                            <p className="price">{plan==="Monthly"?`$${el.price/10}/mo`:`$${el.price}/yr`}</p>
                        </label>
                    )
                })}
            </div>
            <FooterBtns number={3} next={true} />
        </>
    );
}

export default Step3;