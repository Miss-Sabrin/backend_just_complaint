import CompliantModel from "../models/CompModel.js";

export const createUsers = async (req, res) => {
  try {
    const signupDat = await CompliantModel.create(req.body);

    res.status(200).json({
      status: "success",
      message: "Registeration Suucessfully",
      User: signupDat,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error", status: "failed" });
  }
};



export const getUsers = async (req, res) => {
  try {
    const signupDat = await CompliantModel.find();

    res.status(200).json({
      status: "success",
      User: signupDat,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error", status: "failed" });
  }
};
