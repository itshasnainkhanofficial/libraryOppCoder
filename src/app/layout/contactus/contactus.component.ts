import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { faPhone } from "@fortawesome/free-solid-svg-icons";

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

  constructor(private modalService: BsModalService) {}
    openModal(template: TemplateRef<any>) {
      this.modalRef = this.modalService.show(template);
    }


}
