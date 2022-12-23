import Finish from "./finish";
import Step1 from "./step1";
import Step2 from './step2';
import Step3 from "./step3";
import Step4 from './step4';
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

function FormCont() {
    const[name,setName]=useState({
        name:"",
        valid:undefined
    })
    const[email,setEmail]=useState({
        email:"",
        valid:undefined
    })
    const[phone,setPhone]=useState({
        phone:"",
        valid:undefined
    })

    const[money,setMoney]=useState(
        {
            plan:0,
            addOns:0,
            cardId:0,
            details:[]
        }
    )

    const[planName,setPlanName]=useState("")

    const[selectPlan,setSelectPlan]=useState("Monthly")

    const [selectedAddOns,setSelectedAddOns]=useState([])

    return (
        <div className="form-cont">
            <div className="form-steps">
                <Routes>
                    <Route exact path="/form" 
                        element={<Step1 
                        name={name} setName={setName}
                        phone={phone} setPhone={setPhone}
                        email={email} setEmail={setEmail} />}>
                    </Route>
                    <Route path="step2"
                        element={<Step2 
                            money={money}
                            setMoney={setMoney} 
                            selectPlan={selectPlan} 
                            setSelectPlan={setSelectPlan}
                            setSelectedAddOns={setSelectedAddOns}
                            planName={setPlanName} />} >        
                    </Route>
                    <Route path="step3" 
                        element={<Step3 
                            money={money}
                            setMoney={setMoney}
                            plan={selectPlan}  
                            selectedAddOns={selectedAddOns}
                            setSelectedAddOns={setSelectedAddOns} />} >
                    </Route>
                    <Route path="step4" 
                        element={<Step4 
                            money={money}
                            plan={selectPlan}
                            addOns={selectedAddOns}
                            planName={planName}
                            />} >
                    </Route>
                    <Route path="finish" 
                        element={<Finish 
                            setName={setName}
                            setPhone={setPhone}
                            setEmail={setEmail}
                            setMoney={setMoney}
                            setSelectPlan={setSelectPlan}
                            setSelectedAddOns={setSelectedAddOns}
                            setPlanName={setPlanName}
                            />} >
                    </Route>
                </Routes>
            </div>
        </div>
    );
}

export default FormCont;