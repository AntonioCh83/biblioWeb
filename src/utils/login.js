import axios from "axios";

export default class LoginService{
   async login(email,password,success,errorm){
       try {
        const response=await axios.post("https://reqres.in/api/login",{email,password});
     console.log(response,response.data)
     success(response.data)
            
       } catch (error) {
        errorm(error.message)
        
        
    }
}
}