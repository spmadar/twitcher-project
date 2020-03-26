import React from "react"
import { userIsNotAuthenticated } from "../HOCs"
import { RegistrationForm } from "."

class Signup extends React.Component{
    render(){
        return(
            <div>
                <RegistrationForm/>
            </div>
        )
    }
    
}

export default userIsNotAuthenticated(Signup);