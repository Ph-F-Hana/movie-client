export enum Role { USER = "User", ADMIN = "Admin" };

export class User {
  _id?: string;
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  password: string = '';
  avatar: string = '';
  role?: Role = Role.USER;
  likes?: string[] = [];
}
