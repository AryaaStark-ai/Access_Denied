import express from "express";
import zod from "zod";
import bcrypt from "bcryptjs";

const signup = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return res.status(400).json({ message: "Missing required fields!!" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  console.log(`hashed password: ${hashedPassword}`);

  res.status(200).json({
    message: "User created successfully!!",
    username: username,
    email: email,
    password: password,
  });
});

const login = (req, res, next) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: "Missing required fields!!" });
  }

  res.status(200).json({
    message: "User logedin successfully!!",
    username: username,
    password: password,
  });
};

const logout = (req, res, next) => {};

export { signup, login, logout };
