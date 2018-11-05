import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  closeResult: string;

  media: any = {};
  formCache1: boolean;
  formCache2: boolean;
  formCache3: boolean;

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
    this.formCache1 = false;
    this.formCache2 = false;
    this.formCache3 = false;
  }

  open(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  envoi() {
    const form = [this.media.email, this.media.obj, this.media.msg];
    const formS = JSON.stringify(form);
    localStorage.setItem('formContact', formS);
  }

}
