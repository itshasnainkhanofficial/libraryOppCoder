import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { Store } from '@ngrx/store';
import { LibraryState } from 'src/app/store';
import { sendingCustomerSupportMessage } from 'src/app/store/actions/customer-support.actions';
import { CustomerMessage } from 'src/app/shared/models/customer-message';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements AfterViewInit {

  phone = faPhone;

    ngAfterViewInit(): void {

    }
    modalRef!: BsModalRef;

  constructor(private modalService: BsModalService , private store : Store<LibraryState>) {}
    openModal(template: TemplateRef<any>) {
      this.modalRef = this.modalService.show(template);
    }

    
    abc = {
      name: "hasnain",email: "asdf", message: "af"
    }

    onSubmit(data : CustomerMessage){
      this.store.dispatch(sendingCustomerSupportMessage({data : data}))
    }


}
