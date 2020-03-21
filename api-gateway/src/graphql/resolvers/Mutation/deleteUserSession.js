import UsersService from '#root/adapters/UsersService';

const deleteUserSessionResolver = async (_, args, context) => {
  await UsersService.deleteUserSession(args);
  context.res.clearCookie('userSessionId');

  return true;
};

export default deleteUserSessionResolver;
