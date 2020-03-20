import UsersService from '#root/adapters/UsersService';

const injectSession = (req, res, next) => {
  if (req.cookies.userSessionId) {
    const session = UsersService.fetchUserSession({
      userSessionId: req.cookies.userSessionId,
    });

    res.locals.userSession = session;
  }

  return next();
};

export default injectSession;
