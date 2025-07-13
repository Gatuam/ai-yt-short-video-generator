import { resend } from "@/lib/resend";
import { getVerificationEmailTemplate } from "../../emailtemplate/getVerificationEmailTemplate";

export const sendVerificationEmail = async (email, username, verifyCode) => {
  try {
    const { data, error } = await resend.emails.send({
      from: "sggtm42@gmail",
      to: email,
      subject: "verification code",
      react: getVerificationEmailTemplate({ username, verifyCode }),
    });
    if (error) {
      return res.status(400).json(error);
    }
  } catch (err) {
    return {
      success: false,
      message: "Verification server error",
    };
  }

  res.status(200).json(data);
};
