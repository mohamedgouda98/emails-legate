import { Component, OnInit } from '@angular/core';
import { contacts } from '@app/Features/contacts/contacts.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { email } from '@app/Features/emails/emails.model';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit {
  contacts: contacts[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getContact();
  }

  deleteContact(contactId: number) {
    this.http.get('http://emails.gouda.website/api/admin/employee/delete/' + contactId).subscribe((responseData) => {});

    this.getContact();
  }

  getContact() {
    this.http
      .get('http://emails.gouda.website/api/admin/employee/all')
      .pipe(
        map((responseData) => {
          const contactsArray: contacts[] = [];
          const data = 'data';
          const responseContacts = responseData[data];

          for (const key in responseContacts) {
            if (responseContacts.hasOwnProperty(key)) {
              contactsArray.push({ ...responseContacts[key] });
            }
          }
          return contactsArray;
        })
      )
      // tslint:disable-next-line:no-shadowed-variable
      .subscribe((contacts) => {
        this.contacts = contacts;
      });
  }
}
