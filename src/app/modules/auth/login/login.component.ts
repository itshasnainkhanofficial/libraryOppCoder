import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
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
    private modalService: ModalService,
    private store : Store<LibraryState>
    
    ) { }

  ngOnInit(): void {
    
    

    this.LoginForm = new FormGroup({

    
      'email': new FormControl("hasnain@gmail.com" , [Validators.required, Validators.email] ),

      'password': new FormControl("123456" , [Validators.required , Validators.minLength(5)]),


    });


  }




  userLogin(){



    if(this.LoginForm.valid){


      this.store.dispatch(loginModal(this.LoginForm.value))
    }
  
  }

  

  cancel(): void {
    this.modalService.hide();
  }

}