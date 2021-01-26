import { Component, OnInit } from '@angular/core';
import { email } from '@app/Features/emails/emails.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-emails',
  templateUrl: './emails.component.html',
  styleUrls: ['./emails.component.scss'],
})
export class EmailsComponent implements OnInit {
  emails: email[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getEmails();
  }

  deleteEmail(emailId: number) {
    this.http.get('http://emails.gouda.website/api/admin/email/delete/' + emailId).subscribe((responseData) => {});

    this.getEmails();
  }

  getEmails() {
    this.http
      .get('http://emails.gouda.website/api/admin/email/all')
      .pipe(
        map((responseData) => {
          const emailsArray: email[] = [];
          const data = 'data';
          const responseEmails = responseData[data];

          for (const key in responseEmails) {
            if (responseEmails.hasOwnProperty(key)) {
              emailsArray.push({ ...responseEmails[key] });
            }
          }
          return emailsArray;
        })
      )
      .subscribe((emails) => {
        // @ts-ignore
        this.emails = emails;
      });
  }
}
