export class User {
  public id_user: string;
  public name: string;
  public surname: string;
  public email: string;

  constructor(
    id_user?: string,
    name?: string,
    surname?: string,
    email?: string
  ) {
    this.id_user = id_user;
    this.name = name;
    this.surname = surname;
    this.email = email;
  }

}
