import { NextResponse } from "next/server";

export interface ContactPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  let body: ContactPayload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, subject, message } = body;

  if (!name?.trim() || !email?.trim() || !subject?.trim() || !message?.trim()) {
    return NextResponse.json({ error: "All fields are required." }, { status: 422 });
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 422 });
  }

  if (message.trim().length < 10) {
    return NextResponse.json({ error: "Message is too short." }, { status: 422 });
  }

  /*
   * Stage 7 TODO: wire up Resend for email delivery.
   *
   * import { Resend } from "resend";
   * const resend = new Resend(process.env.RESEND_API_KEY);
   * await resend.emails.send({
   *   from: "Kim Hilton Studio <noreply@kimhiltonstudio.com>",
   *   to: "admin@kimhiltonstudio.com",
   *   replyTo: email,
   *   subject: `New enquiry: ${subject}`,
   *   text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
   * });
   *
   * Add RESEND_API_KEY to .env.local when ready.
   */

  console.log("[Contact form submission]", { name, email, subject });

  return NextResponse.json({ success: true });
}
