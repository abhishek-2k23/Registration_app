const express = require("express");
const Schema = require("./schema");
exports.registerUser = async (req, res) => {
  try {
    const { firstName, lastName, Age, Email, phoneNumber, gender,Password } = req.body;

    const existingUser = await Schema.findOne({Email})
    if (existingUser) {
        console.log("user Exist");
      return res.status(409).json({
        success: false,
        message: "user already exist",
        data : existingUser
      });
    } else {
      const response = await Schema.create({
        firstName,
        lastName,
        Age,
        Email,
        phoneNumber,
        gender,
        Password
      });

      res.status(200).json({
        success: true,
        data: response,
        message: "submitted successfully",
      });

      console.log("data submitted");
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "unable to submit the data",
      error: error,
    });
  }
};
