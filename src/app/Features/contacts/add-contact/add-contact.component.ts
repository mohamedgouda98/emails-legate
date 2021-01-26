import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss'],
})
export class AddContactComponent implements OnInit {
  success: string;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  onCreateContact(ContactData: { signature: string; body: string; type: string }) {
    // Send Http request
    this.http.post('http://emails.gouda.website/api/admin/employee/add', ContactData).subscribe((responseData) => {
      this.success = 'Contact Was Added';
    });
  }
}
