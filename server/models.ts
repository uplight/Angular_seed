export interface DbUser {
  id: number;
  sub: string;
  email: string;
  passwordDigest: string;
  roles: string[];
}
