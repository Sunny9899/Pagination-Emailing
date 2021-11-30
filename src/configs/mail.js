//1SENDING EMAILS USING Express Application using nodemailer

const nodemailer=require("nodemailer");

require("dotenv").config();//Everything mentioned in .env file will be converted into environment variables

module.exports=nodemailer.createTransport({
    pool:true,
    host: "smtp.mailtrap.io",
    port: 587,
    secure: false, // upgrade later with STARTTLS
    auth: {
      user: process.env.SMTP_USERNAME,
      pass: process.env.SMTP_PASSWORD,
    },
  });