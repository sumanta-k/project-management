import Mailgen from "mailgen";
import nodemailer from "nodemailer";

const sendEmail = async (options) => {
  const mailGenerator = new Mailgen({
    theme: "default",
    product: {
      name: "Task Manager",
      link: "https://taskmanagelink.com",
    },
  });

  const emailTextual = mailGenerator.generatePlaintext(options.mailgenContent);
  const emailHtml = mailGenerator.generate(options.mailgenContent);

  const transporter = nodemailer.createTransport({
    host: process.env.MAILTRAP_SMTP_HOST,
    port: process.env.MAILTRAP_SMTP_PORT,
    auth: {
      user: process.env.MAILTRAP_SMTP_USER,
      pass: process.env.MAILTRAP_SMTP_PASS,
    },
  });

  const mail = {
    from: "mail.taskmanager@example.com",
    to: options.email,
    subject: options.subject,
    text: emailTextual,
    html: emailHtml,
  };

};

const emailVerificationMailgenContent = (username, verificationUrl) => {
  return {
    body: {
      name: username,
      intro: "welcome to our app! we're exited to have you on board",
    },
    action: {
      instructions: "To verify your email, please click the button",
      button: {
        color: "#22BC06",
        text: "verify your email",
        link: verificationUrl,
      },
    },
    outro:
      "Need help, or have question ? just reply to this email, we would love to help",
  };
};

const forgotPasswordMailgenContent = (username, passwordResetUrl) => {
  return {
    body: {
      name: username,
      intro: "we got a request to reset the password for your account",
    },
    action: {
      instructions:
        "To reset your password click on the following button or link",
      button: {
        color: "#22BC06",
        text: "Reset password",
        link: passwordResetUrl,
      },
    },
    outro:
      "Need help, or have question ? just reply to this email, we would love to help",
  };
};

export { emailVerificationMailgenContent, forgotPasswordMailgenContent };
