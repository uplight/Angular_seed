import * as fs from 'fs';
import * as _ from 'lodash';
import * as express from 'express';
import {Application} from 'express';
import * as https from 'https';
import {getAllCourses, getCourseById} from './get-courses.route';
import {searchLessons} from './search-lessons.route';
import {saveCourse} from './save-course.route';
import {getProducts} from './get-products';
import {createUser, getUser, login, logout} from './auth.routes';
import {retrieveUserIdFromRequest} from './get-user.middleware';
import {checkIfAuthenticated} from './authentication.middleware';
import {checkIfAuthorized} from './authorization.middleware';
import {checkCsrfToken} from './csrf.middleware';
import {loginAsUser} from './login-as-user.route';
import {userInfo} from './user-info.route';

const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');

const app: Application = express();


app.use(cookieParser());
app.use(retrieveUserIdFromRequest);
app.use(bodyParser.json());

const commandLineArgs = require('command-line-args');

const optionDefinitions = [
  {name: 'secure', type: Boolean},
];


const options = commandLineArgs(optionDefinitions);

const checkIfAuth2Authenticated = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksUri: 'https:// ....jwks.json'
  }),
  algorithm: ['RS256']
});

app.route('/api/products').get(getProducts);
app.use(checkIfAuth2Authenticated);

app.use((err, req, resp, next) => {

  if (err && err.name === 'UnauthorizedError') {
    resp.status(err.status).json({message: err.message});
  } else {
    next();
  }
});

app.route('/api/userinfo').put(userInfo);

app.route('/api/courses').get(getAllCourses);

app.route('/api/courses/:id').get(getCourseById);

app.route('/api/lessons').get(
  checkIfAuthenticated,
  _.partial(checkIfAuthorized, ['STUDENT']),
  searchLessons);

app.route('/api/admin')
  .post(checkIfAuthenticated,
    _.partial(checkIfAuthorized, ['ADMIN']),
    loginAsUser);

app.route('/api/courses/:id').put(saveCourse);




app.route('/api/signup')
  .post(createUser);

app.route('/api/user')
  .get(getUser);

app.route('/api/logout')
  .post(logout);

app.route('/api/login')
  .post(checkIfAuthenticated, checkCsrfToken, logout);


if (options.secure) {

  const httpsServer = https.createServer({
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem')
  }, app);


  // launch an HTTPS Server. Note: this does NOT mean that the application is secure
  httpsServer.listen(9000, () => console.log('HTTPS Secure Server running at https://localhost:' + httpsServer.address().port));

} else {
  // launch an HTTP Server
  const httpServer = app.listen(9000, () => {
    console.log('HTTP Server running at https://localhost:' + httpServer.address().port);
  });

}



