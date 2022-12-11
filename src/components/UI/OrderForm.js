import './OrderForm.css';
import React, {useRef} from 'react';
const OrderForm = (props) => {
    const nameRef = useRef();
    const phoneRef = useRef();
    const addressRef = useRef();
    const cityRef = useRef();
    const pincodeRef = useRef();
    const proceedRef = useRef();
    const refValue=(refid)=>{
        return refid.current.value
    }

    const submitHandler=(e)=>{
        e.preventDefault();
        const userOrderData ={
            name:refValue(nameRef),
            phone:refValue(phoneRef),
            address:refValue(addressRef),
            city:refValue(cityRef),
            pincode:refValue(pincodeRef),
            proceed:"yes",
        }
        console.log(userOrderData)
        const formIsValid =()=>{
            if(
                userOrderData.name !='' 
                && userOrderData.phone.length > 9
                && userOrderData.address != ''
                && userOrderData.pincode.length >= 6
                && userOrderData.city !=''){
                return true}
                return false
            }

        if(!formIsValid)
        {return;
        }
    
                return props.onOrderCheckout(userOrderData)
    }
    return (


        <div id='view' className="form">
            <form className="form-main" onSubmit={submitHandler}>
                <div className="namebox">
                    <div className="inputbox">
                        <label htmlFor="firstname">fullName</label>
                        <input ref={nameRef} type="text" id="firstname" placeholder="narendra" />
                    </div>

                    <div className="inputbox">
                        <label htmlFor="lastname">phone</label>
                        <input ref={phoneRef} type="text" id="lastname" placeholder="123-345-5677" />
                    </div>

                </div>
                <div className="inputbox">
                    <label htmlFor="address">address</label>
                    <input ref={addressRef} className="long-box" type="text" id="address" placeholder="urrapakkam, sethil nager" />
                </div>

                <div className="namebox">
                    <div className="inputbox">
                        <label htmlFor="areacode">pin-code</label>
                        <input ref={pincodeRef} type="text" id="areacode" placeholder='603210' />
                    </div>

                    <div className="inputbox">
                        <label htmlFor="phoneno">city</label>
                        <input ref={cityRef} type="text" id="phoneno" placeholder="chennai" />
                    </div>

                </div>
                <div className="tick-box">
                    <label className="inputlabel tick-text" htmlFor="tick">proceed to order</label>
                    <div className="radio-option">
                        <label htmlFor="yes">yes</label>
                        <input ref={proceedRef} className="radioinput" type="radio" id="yes" name="choose" />

                        <label htmlFor="no">no</label>
                        <input type="radio" className="radioinput" id="no" name="choose" />

                    </div>
                </div>

                <div className="button-box">
                    <button type='button' className="btn-box" onClick={props.onCancel}>Cancel</button>
                    <button className="btn-box checkout" type="submit" id="button">Checkout</button>
                </div>
            </form>
        </div>
    )
}
export default OrderForm;