export interface UserRegister {
  name: string;
  lastname: string;
  username: string;
  email: string;
  password: string;
  passwordVerify: string;
}

export interface UserLogin {
  email: string;
  pass: string;
}
