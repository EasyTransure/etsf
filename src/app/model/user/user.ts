export class User {
  public id_user: string;
  public name: string;
  public surname: string;
  public email: string;
  public number: number

  constructor(
    id_user: string,
    name?: string,
    surname?: string,
    email?: string,
    number?: number
  ) {
    this.id_user = id_user;
    this.name = name ? name : '';
    this.surname = surname ? surname : '';
    this.email = email ? email : '';
    this.number = number ? number : 0;
  }

}
