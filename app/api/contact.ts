import nodemailer from "nodemailer";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") return res.status(405).end("Method Not Allowed");

  const { fullName, email, message, ...rest } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.",
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER!,
        pass: process.env.SMTP_PASS!,
      },
    });

    await transporter.sendMail({
      from: `"Website Contact" <${process.env.SMTP_USER}>`,
      to: "dev@weblankan.com",
      subject: `New Contact Form Submission`,
      html: `
        <h3>New Contact</h3>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
        <pre>${JSON.stringify(rest, null, 2)}</pre>
        `,
    });
  } catch (error) {
    return res.status(500).json({ error: "Something went wrong." });
  }
}
