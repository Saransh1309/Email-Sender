const nodemailer = require("nodemailer");

const sendEmail = async (to, messageContent) => {
  try {
    // Create transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,git
      },
    });

    // Message object
    const message = {
      from: "ma0160762@gmail.com",
      to: to,
      subject: "New Message from Nodemailer APP",
      html: `
        <div style="font-family: Arial, sans-serif; padding: 10px; background-color: #f9f9f9;">
          <h3 style="color: #333;">You have received a new message from Nodemailer APP</h3>
          <p style="font-size: 16px;">${messageContent}</p>
          <hr />
          <p style="font-size: 12px; color: #555;">Sent automatically from your Node.js Email App</p>
        </div>
      `,
    };

    // Send the email
    const info = await transporter.sendMail(message);
    console.log("Message sent:", info.messageId);
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Email could not be sent");
  }
};

module.exports = sendEmail;
