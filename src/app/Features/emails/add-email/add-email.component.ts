import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-email',
  templateUrl: './add-email.component.html',
  styleUrls: ['./add-email.component.scss'],
})
export class AddEmailComponent implements OnInit {
  success: string;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  onCreateEmail(emailData: { signature: string; body: string; type: string }) {
    // Send Http request
    this.http.post('http://emails.gouda.website/api/admin/email/add', emailData).subscribe((responseData) => {
      this.success = 'Email Template Was Added';
    });
  }
}
