import { Component, OnInit } from '@angular/core';
import { UserService } from '../resources/services/user.service';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalService } from 'src/app/shared/modal.service';
import { Store } from '@ngrx/store';
import { LibraryState } from 'src/app/store';
import { loginModal } from 'src/app/store/actions/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  

  LoginForm : FormGroup ;
  


  constructor(
    private _userService : UserService ,
    private router : Router ,
    private modalService: ModalService,
    private store : Store<LibraryState>
    
    ) { }

  ngOnInit(): void {
    
    

    this.LoginForm = new FormGroup({

    
      'email': new FormControl("abcd@gmail.com" , [Validators.required, Validators.email] ),

      'password': new FormControl("12345" , [Validators.required , Validators.minLength(5)]),


    });


  }




  userLogin(){

    
    // if(this.LoginForm.valid){

    //   this._userService.userLogin(this.LoginForm.value).subscribe(
    //     res => {
    //       console.log(res);
          
    //   },
      
    //   err => {
    //       console.log(err.error.text);
    //   }
      
    //   )
    // }


    if(this.LoginForm.valid){


      this.store.dispatch(loginModal(this.LoginForm.value))
    }
  
  }

  

  cancel(): void {
    this.modalService.hide();
  }

}