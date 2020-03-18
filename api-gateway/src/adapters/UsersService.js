import axios from 'axios';

const USERS_SERVICE_URI = 'http://users-service:7101';

export default class UsersService {
  static async createUser({ name, email, password }) {
    const { data } = await axios.post(`${USERS_SERVICE_URI}/users`, {
      name,
      email,
      password,
    });
    return data.user;
  }

  static async createUserSession({ email, password }) {
    const { data: userSessions } = await axios.post(
      `${USERS_SERVICE_URI}/sessions`,
      {
        email,
        password,
      }
    );

    return userSessions;
  }

  static async fetchUser({ userId }) {
    const { data } = await axios.get(`${USERS_SERVICE_URI}/users/${userId}`);

    return data.user;
  }
}
