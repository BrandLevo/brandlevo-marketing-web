import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { firstName, lastName, email, businessName, message } =
    await request.json();

  if (!firstName || !email || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: "BrandLevo Contact <noreply@brandlevo.com>",
    to: "sales@brandlevo.com",
    replyTo: email,
    subject: `New enquiry from ${firstName} ${lastName} — ${businessName || "No business name"}`,
    text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nBusiness: ${businessName || "—"}\n\n${message}`,
  });

  if (error) {
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
