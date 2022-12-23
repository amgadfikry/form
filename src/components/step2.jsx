import { useEffect, useRef, useState } from "react";
import FooterBtns from "../pattern/footterBtns";
import Header from "../pattern/header";

function Step2({setMoney,selectPlan,setSelectPlan,money,setSelectedAddOns,planName}) {
    const stepTwoH1 ="Select your plan"
    const stepTwoPara="You have the option of monthly or yearly billing"
    const priceList =[
        {
            id:1,
            icon:"/assets/icon-arcade.svg",
            name:"Arcade",
            price:9,
            discount:"2 months free"      
        },
        {
            id:2,
            icon:"/assets/icon-advanced.svg",
            name:"Advanced",
            price:12,
            discount:"2 months free"      
        },
        {
            id:3,
            icon:"/assets/icon-pro.svg",
            name:"Pro",
            price:15,
            discount:"2 months free"      
        }
    ]

    const [next,setNext]=useState(false);
    const [errorMassage,setErrorMassage]=useState(false)

    const cardRef =useRef()
    const toggleBtn =useRef()

    useEffect(()=>{
        if(money.plan){
            setNext(true)
        }else{setNext(false)}
    },[money])


    const handleSwitch=()=>{
        setMoney({details:[],plan:0,cardId:0,addOns:0})
        selectPlan =="Monthly" ? setSelectPlan("Yearly") : setSelectPlan("Monthly")
        setSelectedAddOns([])
        planName("")
    }

    const handlePlan=(el)=>{
        setErrorMassage(false)
        planName(el.name)
        toggleBtn.current.checked 
            ? setMoney({...money,plan:(el.price)*10,cardId:el.id})
            : setMoney({...money,plan:(el.price),cardId:el.id})
    }

    return (
        <>
            <Header h1={stepTwoH1} para={stepTwoPara} />

            <div className="card-cont"  ref={cardRef}>
                {priceList.map(el=>{
                    return (
                        <div className={`card ${el.id === money.cardId ? "card-active" : null}`} 
                                key={el.id} onClick={()=>handlePlan(el)} >
                            <img src={el.icon} alt="arcade icon"></img>
                            <h3>{el.name}</h3>
                            {selectPlan==="Yearly"?<p>{`$${el.price*10}/yr`}</p>:<p>{`$${el.price}/mo`}</p>}
                            {selectPlan==="Yearly" && <p className="discount">{el.discount}</p>}
                        </div>
                    )
                })}
            </div>

            <div className="toggle-btn">
                <span className={selectPlan=="Monthly" ? "active" : undefined}>Monthly</span>
                <div className="toggle">
                    <input type="checkbox" name="switch" ref={toggleBtn}
                        id="switch" defaultChecked={selectPlan==="Monthly" ? false : true}></input>
                    <label htmlFor="switch" onClick={handleSwitch}></label>
                </div>
                <span className={selectPlan=="Yearly" ? "active" : undefined}>Yearly</span>
            </div>

            {errorMassage && <p className="plan-error">Please select your plan</p>}

            <FooterBtns number={2} next={next} errorMassage={setErrorMassage}/>
        </>
    );
}

export default Step2;