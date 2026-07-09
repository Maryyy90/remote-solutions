import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const TO_EMAIL = "info.remotesolutionsgroup@gmail.com";  

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, company, email, phone, message } = body;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Remote Solutions <onboarding@resend.dev>", // change after verifying your domain
      to: [TO_EMAIL],
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: 'Montserrat', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0D1B2A; color: #ffffff; border-radius: 12px; overflow: hidden;">
          
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #1E3A5F, #0D1B2A); padding: 32px; border-bottom: 2px solid #D4AF37;">
            <div style="font-size: 22px; font-weight: 900; letter-spacing: 2px;">
              REMOTE <span style="color: #D4AF37;">SOLUTIONS</span>
            </div>
            <div style="color: #D4AF37; font-size: 11px; letter-spacing: 3px; margin-top: 4px;">
              NEW CONTACT FORM SUBMISSION
            </div>
          </div>

          <!-- Body -->
          <div style="padding: 32px;">

            <!-- Fields -->
            ${[
              { label: "Full Name", value: name },
              { label: "Company", value: company || "—" },
              { label: "Email", value: email },
              { label: "Phone", value: phone || "—" },

            ]
              .map(
                (f) => `
              <div style="margin-bottom: 20px;">
                <div style="font-size: 10px; font-weight: 700; letter-spacing: 2px; color: #D4AF37; text-transform: uppercase; margin-bottom: 4px;">${f.label}</div>
                <div style="background: #1E3A5F; border-left: 3px solid #D4AF37; padding: 12px 16px; border-radius: 6px; font-size: 15px; color: #ffffff;">${f.value}</div>
              </div>`
              )
              .join("")}

            <!-- Message -->
            <div style="margin-bottom: 20px;">
              <div style="font-size: 10px; font-weight: 700; letter-spacing: 2px; color: #D4AF37; text-transform: uppercase; margin-bottom: 4px;">Message</div>
              <div style="background: #1E3A5F; border-left: 3px solid #D4AF37; padding: 16px; border-radius: 6px; font-size: 15px; color: #ffffff; line-height: 1.7; white-space: pre-wrap;">${message}</div>
            </div>

            <!-- Reply CTA -->
            <div style="text-align: center; margin-top: 32px;">
              <a href="mailto:${email}" style="display: inline-block; background: linear-gradient(135deg, #D4AF37, #e8c84a); color: #0D1B2A; font-weight: 800; font-size: 13px; letter-spacing: 2px; padding: 14px 32px; border-radius: 8px; text-decoration: none;">
                REPLY TO ${name.toUpperCase()}
              </a>
            </div>
          </div>

          <!-- Footer -->
          <div style="padding: 20px 32px; background: #060f1a; text-align: center; font-size: 11px; color: rgba(255,255,255,0.3); letter-spacing: 1px;">
            Sent from remotesolutions.com contact form · ${new Date().toLocaleString("en-US", { timeZone: "America/New_York" })} EST
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (err) {
    console.error("API error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
