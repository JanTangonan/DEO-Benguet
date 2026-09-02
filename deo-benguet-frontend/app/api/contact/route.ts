import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

const MAX_NAME_LENGTH = 100;
const MAX_EMAIL_LENGTH = 254;
const MAX_MESSAGE_LENGTH = 5000;

function escapeHtml(value: string) {
    return value.replace(/[&<>"']/g, (character) => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
    })[character] ?? character);
}

export async function POST(req: Request) {
    try {
        const body: unknown = await req.json();

        if (
            typeof body !== "object" ||
            body === null ||
            !("name" in body) ||
            !("email" in body) ||
            !("message" in body) ||
            typeof body.name !== "string" ||
            typeof body.email !== "string" ||
            typeof body.message !== "string"
        ) {
            return NextResponse.json({ error: "Invalid form data" }, { status: 400 });
        }

        const name = body.name.trim();
        const email = body.email.trim();
        const message = body.message.trim();

        if (
            !name ||
            name.length > MAX_NAME_LENGTH ||
            !email ||
            email.length > MAX_EMAIL_LENGTH ||
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
            !message ||
            message.length > MAX_MESSAGE_LENGTH
        ) {
            return NextResponse.json({ error: "Invalid form data" }, { status: 400 });
        }

        const { EMAIL_USER, EMAIL_PASS, EMAIL_RECEIVER } = process.env;
        if (!EMAIL_USER || !EMAIL_PASS || !EMAIL_RECEIVER) {
            console.error("Contact email configuration is incomplete.");
            return NextResponse.json({ error: "Contact service is unavailable" }, { status: 503 });
        }

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: EMAIL_USER,
                pass: EMAIL_PASS,
            },
        });

        await transporter.sendMail({
            from: `"DEO Website" <${EMAIL_USER}>`,
            to: EMAIL_RECEIVER,
            subject: "New Contact Form Message",
            html: `
        <h2>New Message from DEO Website</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Message:</strong><br/>${escapeHtml(message).replace(/\r?\n/g, "<br/>")}</p>
      `,
            text: `New Message from DEO Website\n\nName: ${name}\nEmail: ${email}\nMessage:\n${message}`,
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Failed to send contact email:", error);
        return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
    }
}