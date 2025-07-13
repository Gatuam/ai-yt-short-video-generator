import { resend } from "@/lib/resend";
import { getVerificationEmailTemplate } from "../../emailtemplate/getVerificationEmailTemplate";

export const sendVerificationEmail = async (email, username, verifyCode) => {
  try {
    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: email,
      subject: "verification code",
      react: getVerificationEmailTemplate({ username, verifyCode }),
    });

    if (error) {
      console.error("Email error:", error);
      return {
        success: false,
        message: "Failed to send email",
      };
    }

    return {
      success: true,
      message: "Email sent successfully",
      data,
    };
  } catch (err) {
    console.error("Email sending error:", err);
    return {
      success: false,
      message: "Verification server error",
    };
  }
};
