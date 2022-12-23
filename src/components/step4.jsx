import FooterBtns from "../pattern/footterBtns";
import Header from "../pattern/header";

function Step4({money,plan,addOns,planName}) {
    const stepFourH1 ="Finishing up"
    const stepFourPara="Double-check everything look OK before confirming"

    return (
        <>
            <Header h1={stepFourH1} para={stepFourPara} />
            <div className="cart">
                <div className="plan">
                    <div className="main-plan plan-flex">
                        <p className="plan-name">{planName}({plan})</p>
                        <p className="plan-price">${money.plan}/{plan==="Monthly" ? "mo" : "yr"}</p>
                    </div>
                    {money.details.map(el=>{
                        return(
                            <div className="add-plan plan-flex" key={el.id}>
                                <p className="add-name">{el.name}</p>
                                <p className="add-price">${el.price}/{plan}</p>
                            </div>
                        )
                    })}

                </div>
                <div className="total plan-flex">
                        <p className="total-name">Total({plan})</p>
                        <p className="total-price">
                            ${money.addOns+money.plan}/{plan==="Monthly" ? "mo" : "yr"}
                        </p>
                </div>
            </div>
            <FooterBtns number={4} next={true} />
        </>
    );
}

export default Step4;