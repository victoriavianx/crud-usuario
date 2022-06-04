import users from "../../database";
import { v4 as uuidv4 } from "uuid";
import * as bcrypt from "bcryptjs";

const createUserService = async (name, email, password, isAdm) => {
  const userAlreadyExists = users.find((user) => user.email === email);

  if (userAlreadyExists) {
    throw new Error("This email address is already being used");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = {
    id: uuidv4(),
    name,
    email,
    password: hashedPassword,
    isAdm,
  };

  users.push(newUser);

  return newUser;
};

export default createUserService;
