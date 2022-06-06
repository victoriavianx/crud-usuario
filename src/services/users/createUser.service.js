import users from "../../database";
import { v4 as uuidv4 } from "uuid";
import * as bcrypt from "bcryptjs";

const createUserService = async (name, email, password, isAdm) => {
  const userAlreadyExists = users.find((user) => user.email === email);

  if (userAlreadyExists) {
    throw new Error("E-mail already registered");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const time = Date.now();

  const today = new Date(time);

  const dateFormated = today.toISOString();

  const newUser = {
    uuid: uuidv4(),
    name,
    email,
    password: hashedPassword,
    isAdm,
    createdOn: dateFormated,
    updatedOn: dateFormated,
  };

  users.push(newUser);

  const user = {
    uuid: uuidv4(),
    name,
    email,
    isAdm,
    createdOn: dateFormated,
    updatedOn: dateFormated,
  };

  return user;
};

export default createUserService;
