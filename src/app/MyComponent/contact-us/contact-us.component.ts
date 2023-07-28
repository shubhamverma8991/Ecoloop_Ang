import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  name: any='';
  number: any='';
  email: any='';
  companyName: any='';
  message: any='';
  constructor(public toaster: ToastrService) { }

  ngOnInit(): void {
  }

  submitForm() {
    const query = {
      name: this.name,
      mobileNumber: this.number,
      email: this.email,
      companyName: this.companyName,
      message: this.message
    }
    if (this.name.length != 0 && this.number.toString().length != 0 && this.email.length != 0 && this.companyName.length != 0) {
      this.toaster.success("Query Submitted");
      this.name = '';
      this.number = ''
      this.email = ''
      this.companyName = ''
      this.message = ''
    }
    else {
      this.toaster.error("Please Fill the Form");
    }
  }
}
