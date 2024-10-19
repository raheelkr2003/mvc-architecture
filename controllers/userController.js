import User from "../models/userModel.js";

// Get all users
export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ message: "All users fetched", data: users });
  } catch (error) {
    res.status(500).json({ message: "An error occurred", error: error.message });
  }
};