import { Component, OnInit } from '@angular/core';
import { UserService } from '../resources/services/user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalService } from 'src/app/shared/modal.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  

  LoginForm : FormGroup ;
  


  constructor(private _userService : UserService , private router : Router ,   private modalService: ModalService) { }

  ngOnInit(): void {
    
    

    this.LoginForm = new FormGroup({

    
      'email': new FormControl("hasnain@gmail.com" , [Validators.required, Validators.email] ),

      'password': new FormControl("abcdef" , [Validators.required , Validators.minLength(5)]),


    });


  }




  userLogin(){

    
    if(this.LoginForm.valid){

      this._userService.userLogin(this.LoginForm.value).subscribe(
        res => {
          console.log(res);
          
      },
      
      err => {
          console.log(err.error.text);
      }
      
      )
    }
  
  }

  
  cancel(): void {
    this.modalService.hide();
  }

}