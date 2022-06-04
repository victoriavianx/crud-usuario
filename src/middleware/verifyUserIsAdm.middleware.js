import users from "../database";

const verifyUserIsAdm = (req, res, next) => {
  const { isAdm } = req.body;

  const userIsAdm = users.find((user) => user.isAdm === isAdm);

  if (!userIsAdm) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }

  next();
};

export default verifyUserIsAdm;
