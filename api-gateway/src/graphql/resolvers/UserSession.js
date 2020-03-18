import UsersService from '#root/adapters/UsersService';

const userSession = {
  user: async userSession => {
    return await UsersService.fetchUser({ userId: userSession.userId });
  },
};

export default userSession;
