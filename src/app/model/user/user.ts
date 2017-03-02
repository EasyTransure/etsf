export class User {
  public id_user: number;
  public name: string;
  public surname: string;
  public password: string;
  public email: string;

  constructor(
    id_user: number,
    name: string,
    surname: string,
    password: string,
    email: string
  ) {
    this.id_user = id_user;
    this.name = name;
    this.surname = surname;
    this.password = password;
    this.email = email;
  }

}