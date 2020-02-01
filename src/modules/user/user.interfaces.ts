export interface User {
  id: number;
  username: string;
  password?: string;
}

export interface CreateUser {
  username: string;
  password: string;
}

export interface GetUser {
  id: number;
  username: string;
}

export interface UpdateUser {
  username?: string;
}
