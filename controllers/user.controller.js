import { User } from "../models/User.model.js";

export const fetchUserById = async (req, res, next) => {
  const { id } = req.params;

  try {
    const user = await User.findById(id);
    res.status(200).json({
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      addresses: user.addresses,
      orders: user.orders,
    });
  } catch (error) {
    next(error);
  }
};

export const updateUser = async (req, res, next) => {
  const { id } = req.params;
  try {
    const user = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    }).exec();
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};
