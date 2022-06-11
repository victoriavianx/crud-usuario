import users from "../database";

const verifyUserIsAdm = (req, res, next) => {
  const isAdm = req.user.isAdm;

  if (isAdm) {
    next();
  }

  return res.status(401).send({ message: "Unauthorized" });
};

export default verifyUserIsAdm;
