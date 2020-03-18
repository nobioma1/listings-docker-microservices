import UsersService from '#root/adapters/UsersService';

const createUserSessionResolver = async (_, args, context) => {
  const userSession = await UsersService.createUserSession(args);

  context.res.cookie('userSessionId', userSession.id, { httpOnly: true });

  return userSession;
};

export default createUserSessionResolver;
