import React from "react";

export function getVerificationEmailTemplate({ username, verifyCode }) {
  return (
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto;">
      <h2>Verify Your Email</h2>
      <p>Hi ${username || "there"},</p>
      <p>
        Thanks for signing up. Use the OTP below to verify your email address:
      </p>

      <div style="font-size: 24px; font-weight: bold; margin: 20px 0; color: #0070f3;">
        ${verifyCode}
      </div>

      <p>This code will expire in 10 minutes.</p>
      <p>If you didn’t request this, you can ignore this email.</p>
      <p>– Your Team</p>
    </div>
  );
}
