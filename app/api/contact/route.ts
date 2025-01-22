import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface ContactFormData {
  name: ReadableStream<Uint8Array> | null;        // Name of the user
  email: ReadableStream<Uint8Array> | null;       // Email address of the user
  phone: ReadableStream<Uint8Array> | null;       // Phone number of the user
  company?: ReadableStream<Uint8Array> | null;    // Optional: Name of the company
  message: ReadableStream<Uint8Array> | null;     // Message from the user
}

export async function POST(req:Request) {
  if (req.method === "POST") {
    const { name, email, phone, company, message }: any= req.body;

    try {
      // Create Nodemailer transporter
      const transporter = nodemailer.createTransport({
        service: "gmail", // or another email provider
        auth: {
          user: process.env.EMAIL_USER, // Your email address
          pass: process.env.EMAIL_PASS, // Your email password or app-specific password
        },
      });
      console.log(process.env.EMAIL_USER);
      console.log(process.env.EMAIL_PASS);

      // Email options
      const mailOptions = {
        from: `"${name}" <${email}>`, // Sender's name and email
        to: process.env.RECEIVER_EMAIL, // Your email address to receive form submissions
        subject: "New Contact Form Submission",
        text: `
          Name: ${name}
          Email: ${email}
          Phone: ${phone}
          Company: ${company}
          Message: ${message}
        `,
        html: `
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Company:</strong> ${company}</p>
          <p><strong>Message:</strong> ${message}</p>
        `,
      };

      // Send email
      await transporter.sendMail(mailOptions);

      return NextResponse.json({
        message:"Message Sent"
      },
      {status:200})
    } catch (error) {
      console.error("Error sending email:", error);
      return NextResponse.json({
        message:"Failed to send"
      },
      {status:500})
    }
  } else {
    return NextResponse.json({ success: false, message: "Method not allowed" },{status:400})
  }
}
