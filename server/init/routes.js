/**
 * Routes for express app
 */
import passport from 'passport';
import unsupportedMessage from '../db/unsupportedMessage';
import { controllers, passport as passportConfig } from '../db';

const usersController = controllers && controllers.users;
const topicsController = controllers && controllers.topics;
const commentsController = controllers && controllers.comments;
const banksController = controllers && controllers.banks;


export default (app) => {
  const MAPLOG = true;

  // user routes
  if (usersController) {
    if (MAPLOG) console.log("usersController");
    app.post('/login', usersController.login);
    app.post('/signup', usersController.signUp);
    app.post('/logout', usersController.logout);
  } else {
    console.warn(unsupportedMessage('users routes'));
  }

  if (passportConfig && passportConfig.google) {
    // google auth
    // Redirect the user to Google for authentication. When complete, Google
    // will redirect the user back to the application at
    // /auth/google/return
    // Authentication with google requires an additional scope param, for more info go
    // here https://developers.google.com/identity/protocols/OpenIDConnect#scope-param
    app.get('/auth/google', passport.authenticate('google', {
      scope: [
        'https://www.googleapis.com/auth/userinfo.profile',
        'https://www.googleapis.com/auth/userinfo.email'
      ]
    }));

    // Google will redirect the user to this URL after authentication. Finish the
    // process by verifying the assertion. If valid, the user will be logged in.
    // Otherwise, the authentication has failed.
    app.get('/auth/google/callback',
      passport.authenticate('google', {
        successRedirect: '/',
        failureRedirect: '/login'
      })
    );
  }

  // topic routes
  if (topicsController) {
    if (MAPLOG) console.log("topicsController");
    app.get('/topic', topicsController.all);
    app.post('/topic/:id', topicsController.add);
    app.put('/topic/:id', topicsController.update);
    app.delete('/topic/:id', topicsController.remove);
  } else {
    console.warn(unsupportedMessage('topics routes'));
  }

  // comment routes
  if (commentsController) {
    const MAPLOG = true;
    if (MAPLOG) console.log("commentsController");
    app.get('/comment', commentsController.all);
    app.post('/comment/:id', commentsController.add);
    app.delete('/comment/:id', commentsController.remove);
  } else {
    console.warn(unsupportedMessage('comments routes'));
  }

  // banks routes
  if (banksController) {
    const MAPLOG = true;
    if (MAPLOG) console.log("banksController");
    app.get('/banks', banksController.all);
    app.post('/bank/:id', banksController.add);
    app.delete('/bank/:id', banksController.remove);
  } else {
    console.warn(unsupportedMessage('banks routes'));
  }


};
