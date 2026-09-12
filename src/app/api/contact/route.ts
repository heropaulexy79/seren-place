import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(req: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error('RESEND_API_KEY is not set.');
      return NextResponse.json({ error: 'Email service is not configured. Please call us directly at +1 910-710-7977.' }, { status: 503 });
    }

    const resend = new Resend(apiKey);


    const body = await req.json();
    const { name, phone, email, service, message } = body;

    if (!name || !email) {
      return NextResponse.json({ error: 'Name and email are required.' }, { status: 400 });
    }

    // Send notification email to Seren Place
    await resend.emails.send({
      from: 'Seren Place Website <onboarding@resend.dev>',
      to: ['info@serenplace.com'],
      subject: `New Consultation Request from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1A2B30;">
          <div style="background: linear-gradient(135deg, #1B2B5E 0%, #1E525D 100%); padding: 32px; border-radius: 12px 12px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 22px;">📋 New Consultation Request</h1>
            <p style="color: rgba(255,255,255,0.8); margin: 8px 0 0 0; font-size: 14px;">Seren Place Homecare — Care Coordination Team</p>
          </div>
          <div style="background: #f8fafb; padding: 32px; border-radius: 0 0 12px 12px; border: 1px solid #e1eaed;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e1eaed; font-weight: 700; width: 140px; color: #1B2B5E;">Full Name</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e1eaed;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e1eaed; font-weight: 700; color: #1B2B5E;">Email</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e1eaed;"><a href="mailto:${email}" style="color: #1E525D;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e1eaed; font-weight: 700; color: #1B2B5E;">Phone</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e1eaed;"><a href="tel:${phone}" style="color: #1E525D;">${phone || 'Not provided'}</a></td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e1eaed; font-weight: 700; color: #1B2B5E;">Service Interest</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e1eaed;">${service || 'Not specified'}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; font-weight: 700; color: #1B2B5E; vertical-align: top;">Message</td>
                <td style="padding: 12px 0;">${message || 'No additional message provided.'}</td>
              </tr>
            </table>
            <div style="margin-top: 24px; padding: 16px; background: #EDF7F8; border-radius: 8px; border-left: 4px solid #3ABCB1;">
              <p style="margin: 0; font-size: 13px; color: #1E525D; font-weight: 600;">⏰ Action Required: Please reach out to this client within 24 hours.</p>
            </div>
          </div>
        </div>
      `,
    });

    // Send confirmation email to the client
    await resend.emails.send({
      from: 'Seren Place Homecare <onboarding@resend.dev>',
      to: [email],
      subject: 'We Received Your Consultation Request — Seren Place Homecare',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1A2B30;">
          <div style="background: linear-gradient(135deg, #1B2B5E 0%, #1E525D 100%); padding: 40px 32px; border-radius: 12px 12px 0 0; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 26px;">Thank You, ${name}! 💙</h1>
            <p style="color: rgba(255,255,255,0.85); margin: 12px 0 0 0; font-size: 15px;">Your consultation request has been received.</p>
          </div>
          <div style="background: #ffffff; padding: 40px 32px; border-radius: 0 0 12px 12px; border: 1px solid #e1eaed;">
            <p style="font-size: 16px; line-height: 1.7; color: #4A6570;">
              Thank you for reaching out to <strong>Seren Place Homecare</strong>. We have received your consultation request and a member of our Care Coordination team will be in touch with you within <strong>24 hours</strong>.
            </p>
            <p style="font-size: 16px; line-height: 1.7; color: #4A6570;">
              We look forward to learning more about your loved one's needs and helping you explore the best care options available.
            </p>
            <div style="background: #EDF7F8; border-radius: 10px; padding: 24px; margin: 28px 0; border-left: 4px solid #3ABCB1;">
              <p style="margin: 0 0 8px 0; font-weight: 700; color: #1B2B5E; font-size: 14px;">YOUR SUBMISSION DETAILS</p>
              <p style="margin: 4px 0; font-size: 14px; color: #4A6570;"><strong>Service of Interest:</strong> ${service || 'Not specified'}</p>
              <p style="margin: 4px 0; font-size: 14px; color: #4A6570;"><strong>Best Contact Phone:</strong> ${phone || 'Not provided'}</p>
            </div>
            <p style="font-size: 14px; color: #94B0B8; margin-top: 32px;">
              If you have urgent questions, please call us directly at <a href="tel:+19107107977" style="color: #1E525D; font-weight: 700;">+1 910-710-7977</a> or email <a href="mailto:info@serenplace.com" style="color: #1E525D;">info@serenplace.com</a>.
            </p>
            <p style="font-size: 14px; color: #94B0B8; margin-top: 16px; border-top: 1px solid #e1eaed; padding-top: 16px;">
              Warm regards,<br/>
              <strong style="color: #1B2B5E;">The Seren Place Care Coordination Team</strong><br/>
              Charlotte Metro & Union County, NC
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });

  } catch (error: any) {
    console.error('Contact form API error:', error?.message || error);
    return NextResponse.json({ error: 'Failed to send. Please try again or call us directly.' }, { status: 500 });
  }
}
