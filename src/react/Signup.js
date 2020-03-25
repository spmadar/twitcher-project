import React from "react"
import { userIsNotAuthenticated } from "./HOCs"
import { RegistrationForm } from "./components"

class Signup extends React.Component{
    render(){
        return(
            <>
            <RegistrationForm/>
            </>
        )
    }
    
}

export default userIsNotAuthenticated(Signup);