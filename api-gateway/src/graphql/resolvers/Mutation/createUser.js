import UsersService from '#root/adapters/UsersService';

const createUserResolver = async (_, args) => {
  return await UsersService.createUser(args);
};

export default createUserResolver;
