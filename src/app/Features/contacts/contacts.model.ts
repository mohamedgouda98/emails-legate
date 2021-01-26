// tslint:disable-next-line:class-name
export class contacts {
  public id: number;
  public name: string;
  public email: string;
  public title: string;

  // tslint:disable-next-line:no-shadowed-variable
  constructor(id: number, name: string, email: string, title: string) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.title = title;
  }
}
