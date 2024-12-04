import { Resend } from "resend";

import EmailTemplate from "@/components/EmailTemplate";
import { NextResponse } from "next/server";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  explanation: string;
}

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const formData = (await req.json()) as ContactFormData;
    const { name, email, subject, explanation } = formData;

    const data = await resend.emails.send({
      from: "Your Website <onboarding@resend.dev>",
      to: ["vlas20421@gmail.com"],
      subject: "New Contact Form Submission",
      react: EmailTemplate({ email, subject, explanation, name }),
      text: `New message from ${name} ${email}\nSubject: ${subject}\n\n${explanation}`,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
