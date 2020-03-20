import UsersService from '#root/adapters/UsersService';

const userSessionResolver = async (_, args, context) => {
  if (!args.me) throw new Error('Unsupported Argument');

  return context.res.locals.userSession;
};

export default userSessionResolver;
