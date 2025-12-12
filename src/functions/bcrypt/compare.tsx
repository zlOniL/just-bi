import bcrypt from 'bcrypt';

export const compare = async (password: string, hash: string) => {
  return bcrypt.compare(password, hash);
};
