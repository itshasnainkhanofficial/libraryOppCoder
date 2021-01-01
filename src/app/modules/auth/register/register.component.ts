import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../resources/services/user.service';
import {User} from "../resources/models/user";
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  
  

  registerForm !: FormGroup ;
  
  notAllowedName = ["admin" , "librarian" , "reader"];
  disableBtn : boolean = false; 
  formStatus : any ; 
  genders = [
    {
      id: 1,
      genderType: "male"
    },
    {
      id: 2,
      genderType: "female"
    }
  ];


  constructor(private _userService : UserService , private router : Router) { }

  ngOnInit(): void {

    

    this.registerForm = new FormGroup({

      
      'email': new FormControl("hasnain@gmail.com" , [Validators.required, Validators.email] ),

      'password': new FormControl("abcdef" , [Validators.required , Validators.minLength(5)]),

      'username' : new FormControl("hasnain" , [Validators.required ,Validators.minLength(3), this.naNames.bind(this)]),
      'cpassword': new FormControl("abcdef" , Validators.required),
      'user_role' : new FormControl("1" , Validators.required),

      'gender': new FormControl("1")

    });

    // this.registerForm.statusChanges.subscribe(
    //   (status) => {
    //     if(status === "VALID"){

    //       this.disableBtn = false;
    //       this.formStatus = status;
    //     }

    //     else{

    //       this.disableBtn = true;
    //       this.formStatus = status;

    //     }
    //   }
    // );

  }




  userRegister(){
    if(this.registerForm.valid){

      // this._userService.register(this.registerForm.value).subscribe( res => {
      //   this.registerForm.reset();
      //   console.log(res);
      //   this.router.navigate(["user/login"])
      // })
    }
  }
  // onSubmit(){

  //   console.log(this.registerForm.value);
  //   alert("form submited");
  // }

  naNames(control : FormControl){

    if(this.notAllowedName.indexOf(control.value) !== -1){
      return { "notallowedname"  : true }
    }
    return null ;
  }
  
  // naEmail(control : FormControl) : Promise<any> | Observable<any>{

  //   const emailResponse  = new Promise<any>((resolve,reject) => {
  //     setTimeout(() => {
  //       if(control.value === "admin@gmail.com"){
          
  //         resolve({"emailnotallowed" : true})
  //       }
  //       else{
  //         resolve(null)
  //       }
  //     }, 1500);
  //   })

  //   return emailResponse;
  // }

}