import {Request, Response} from 'express';
import {db} from './in-memory-db';
import * as passwordValidator from 'password-validator';
import * as argon2 from 'argon2';
import {DbUser} from './models';


export function getUser(req: Request, res: Response) {

  // TODO retrieve the actual user based on JWT content
  const userInfo = req['user'];

  if (userInfo) {

    const user = db.findUserById(userInfo.sub);

    res.status(200).json({email: user.email, id: user.id, roles: user.roles});
  } else {
    res.sendStatus(204);
  }
}

export function login(req: Request, res: Response) {

  const credentials = req.body;

  const user = db.findUserByEmail(credentials.email);

  if (!user) {
    res.sendStatus(403);
  } else {
    loginAndBuildResponse(credentials, user, res);
  }

}

async function loginAndBuildResponse(credentials: any, user: DbUser, res: Response) {

  try {

    const sessionToken = await attemptLogin(credentials, user);

    console.log('Login successful');

    res.cookie('SESSIONID', sessionToken, {httpOnly: true, secure: true});

    res.status(200).json({id: user.id, email: user.email});

  } catch (err) {

    console.log('Login failed!');

    res.sendStatus(403);
  }
}


async function attemptLogin(credentials: any, user: DbUser) {

  const isPasswordValid = await argon2.verify(user.passwordDigest,
    credentials.password);

  if (!isPasswordValid) {
    throw new Error('Password Invalid');
  }
  // TODO  return JWT
  return 1;
}


export function logout(req: Request, res: Response) {

  res.clearCookie('SESSIONID');

  res.status(200).json({message: 'Logout Successful'});
}


export function createUser(req: Request, res: Response) {

  const credentials = req.body;

  const errors = validatePassword(credentials.password);

  if (errors.length > 0) {
    res.status(400).json({errors});
  } else {
    createUserAndSession(res, credentials);
  }

}

async function createUserAndSession(res: Response, credentials) {

  const passwordDigest = await argon2.hash(credentials.password);

  const user = db.createUser(credentials.email, passwordDigest);

  // TODO replace with JWT
  const sessionToken = 1;

  res.cookie('SESSIONID', sessionToken, {httpOnly: true, secure: true});

  res.status(200).json({id: user.id, email: user.email});
}


// Create a schema
const schema = new passwordValidator();

// Add properties to it
schema
  .is().min(10)                                    // Minimum length 10
  .has().uppercase()                              // Must have uppercase letters
  .has().lowercase()                              // Must have lowercase letters
  .has().digits()                                 // Must have digits
  .has().not().spaces()                           // Should not have spaces
  .is().not().oneOf(['Passw0rd', 'Password123']); // Blacklist these values


export function validatePassword(password: string) {
  return schema.validate(password, {list: true});
}
