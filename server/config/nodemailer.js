import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com",
  port: 587,
  secure: false,
  auth: {
    user: "920f41001@smtp-brevo.com",
    pass: "xsmtpsib-62b4569582056add489c8b1b5f873de41a9931c7126577146db6f954eb198fed-Bp8dMtOF7Jcw4Ls2",
  },
});

export default transporter;
