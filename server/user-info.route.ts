import {Request, Response} from 'express';
import {db} from './in-memory-db';

export function userInfo(req: Request, resp: Response) {
  const userInf = req['user'];
  let user = db.findUserByEmail(userInf.email);
  if (!user) {
    user = db.createUser2(user.email, user.sub)
  }
  resp.status(200).json({email: user.email})
}
