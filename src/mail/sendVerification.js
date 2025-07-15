// sendVerification.js
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  secure: true,
  host: 'smtp.gmail.com',
  port: 465,
  auth: {
    user: process.env.APP_USER,
    pass: process.env.APP_PASS,
  },
});

export async function sendMail(to, subject, html) {
  try {
    const info = await transporter.sendMail({
      from: process.env.APP_USER,
      to,
      subject,
      html,
    });
    console.log('Email sent:', info.messageId);
    return true; // ✅ FIX: explicitly return true if successful
  } catch (err) {
    console.error('Failed to send mail:', err);
    return false; // ✅ FIX: return false on failure
  }
}
