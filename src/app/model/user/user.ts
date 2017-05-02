export class User {
  public uid: string;
  public name: string;
  public surname: string;
  public email: string;
  public image: string;

  constructor(
    uid: string,
    name?: string,
    surname?: string,
    email?: string,
    image?: string
  ) {
    this.uid = uid;
    this.name = name ? name : '';
    this.surname = surname ? surname : '';
    this.email = email ? email : '';
    this.image = image ? image : '';
  }

}
