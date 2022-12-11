
import React from "react";
const  UseFetchRequest = (props)=>{
    const GetUserData=()=>{
        const response = fetch(`${props.link}`,{
            body:{},
            method:"GET"
        })
        const data =response.json()
    }

    return (
        
        <React.Fragment>

        </React.Fragment>
    )
       
    
}
export default UseFetchRequest;