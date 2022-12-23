import { useEffect } from 'react';
import thankLogo from '/assets/icon-thank-you.svg'

function Finish({setName,setEmail,setPhone,setMoney,setSelectPlan,setSelectedAddOns,setPlanName}) {

    useEffect(()=>{
        setName({name:"",valid:undefined})
        setEmail({email:"",valid:undefined})
        setPhone({phone:"",valid:undefined})
        setMoney({plan:0,addOns:0,cardId:0,details:[]})
        setSelectPlan("Monthly")
        setSelectedAddOns([])
        setPlanName("")
    },[])

    return (
        <div className="finish">
            <img src={thankLogo}></img>
            <h3>Thanks you!</h3>
            <p>Thanks for confirming your subscription! We hope you have fun 
                using our platform. If you ever need support, please feel free 
                to email us at support@loremgaming.com.</p>
        </div>
    );
}

export default Finish;