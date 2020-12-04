import { AfterViewChecked, AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { Store } from '@ngrx/store';
import { LibraryState } from 'src/app/store';
import { sendingCustomerSupportMessage } from 'src/app/store/actions/customer-support.actions';
import { CustomerMessage } from 'src/app/shared/models/customer-message';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements AfterViewInit  {

  phone = faPhone;

  @ViewChild("contactModal") ContactModal!: TemplateRef<any>;

  ngAfterViewInit(): void {
      
        this.modalRef = this.modalService.show(this.ContactModal);

    }

    
    
    modalRef!: BsModalRef;

  constructor(
    private modalService: BsModalService, 
    private store : Store<LibraryState>,
    private apiService : ApiService
    
    ) {}
    
    openModal(template: TemplateRef<any>) {
      this.modalRef = this.modalService.show(template);
    }


    onSubmit(data : CustomerMessage){
      this.apiService.sendMsg(data).subscribe(res => {
        this.store.dispatch(sendingCustomerSupportMessage({data : res}))
      }
      ,
      err => {
        console.log(err);
      }
      );

    }



}
