// tslint:disable-next-line:class-name
export class email {
  public id: number;
  public signature: string;
  public body: string;
  public type: string;

  constructor(id: number, signature: string, body: string, type: string) {
    this.id = id;
    this.signature = signature;
    this.body = body;
    this.type = type;
  }
}
