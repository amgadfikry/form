import { useEffect, useRef, useState } from "react";
import FooterBtns from "../pattern/footterBtns";
import Header from "../pattern/header";

function Step1({name,setName,phone,setPhone,email,setEmail}) {
    const stepOneH1= "Personal Info"
    const stepOnePara ="Please provide your name, email address, and phone number"

    const[errorMassage,setErrorMassage]=useState(false)
    const[next,setNext]=useState(false)

    
    const handleName =(e)=>{
        setName({...name,name:e.target.value})
    }
    useEffect(()=>{
        const regex = /^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/
        if(name.name.length ==0){
            setName({...name,valid:undefined})
        }else{
            setName({...name,valid:regex.test(name.name)})
        }
    },[name.name])

    const handleEmail =(e)=>{
        setEmail({...email,email:e.target.value})
    }
    useEffect(()=>{
        const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if(email.email.length ==0){
            setEmail({...email,valid:undefined})
        }else{
            setEmail({...email,valid:regex.test(email.email)})
        }
    },[email.email])

    
    const handlePhone =(e)=>{
        setPhone({...phone,phone:e.target.value})
    }
    useEffect(()=>{
        const regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
        if(phone.phone.length ==0){
            setPhone({...phone,valid:undefined})
        }else{
            setPhone({...phone,valid:regex.test(phone.phone)})
        }
    },[phone.phone])

    
    useEffect(()=>{
        setErrorMassage(false)
        if(name.valid && email.valid && phone.valid){
            setNext(true)
        }else{
            setNext(false)
        }
    },[email,name,phone])

    return (
        <>
            <Header  h1={stepOneH1} para={stepOnePara} />
            <form className="step-one-form" >
                <div className="labels">
                    <label htmlFor="name" >Name</label>
                    {name.valid==false && <p className="valid-message">Please enter valid name</p>}
                </div>
                <input id="name" required name="name" 
                    placeholder="e.g. Stephan King" type="text" 
                    value={name.name} onChange={handleName}>
                </input>

                <div className="labels">
                    <label htmlFor="email" >Email Address</label>
                    {email.valid==false && <p className="valid-message">Please enter valid email</p>}
                </div>
                <input id="email" required name="email" 
                    placeholder="e.g. StephanKing@lorem.com" type="email" 
                    value={email.email} onChange={handleEmail}
                    >
                </input>

                <div className="labels">
                    <label htmlFor="phone" >Phone Number</label>
                    {phone.valid==false && <p className="valid-message">Please enter valid phone number</p>}
                </div>
                <input id="phone" required name="phone" 
                    placeholder="e.g. +1 234 567 890" type="tel"
                    value={phone.phone} onChange={handlePhone}
                    >
                </input>
            </form>

            {errorMassage && <p className="plan-error">Please check your fields </p>}

            <FooterBtns number={1} next={next} errorMassage={setErrorMassage} />
        </>
    );
}

export default Step1;