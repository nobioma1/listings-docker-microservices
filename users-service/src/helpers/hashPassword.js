import bcrypt from 'bcryptjs';

const hashPassword = password => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(12));
};

export default hashPassword;
