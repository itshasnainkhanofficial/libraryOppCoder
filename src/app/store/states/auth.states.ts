import { User } from "src/app/modules/auth/resources/models/user";

export interface AuthState {
  
    user : User,
    err : any
  }
  
  export const initialState: AuthState = {
  
    user : {
        id: null,
        username : null,
        email : null,
        password : null ,
        gender : null ,
        user_role : null,
        isAdmin : null
    },
    err : null
}