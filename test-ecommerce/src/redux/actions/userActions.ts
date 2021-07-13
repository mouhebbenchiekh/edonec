import axios from "axios";
import { type } from "os";
import { string } from "yargs";

interface user{
    name:string,
    email:string,
    password:string
}
type action={
    type:string,
    payload:object
}
const register= (user:user)=>{
    return(
    dispatch=>{
    
    axios.post("url","data",{}).then(
        res=>res.data).then(
            data=>{
               const  actionCall:action={
                    type:"registerUser",
                    payload:data
                }

                dispatch(actionCall);


                
            }
                
        )})
        }

