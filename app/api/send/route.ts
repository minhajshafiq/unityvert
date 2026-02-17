import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, phone, service, message } = await request.json();

    const data = await resend.emails.send({
      from: 'Unity Vert <formulaire@minhajshafiq.com>',
      to: ['unityvert@gmail.com'],
      replyTo: email,
      subject: `🌿 Devis : ${service} - ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px; background-color: #f9f9f9; }
              .header { background-color: #1a4d2e; color: white; padding: 15px; text-align: center; border-radius: 8px 8px 0 0; }
              .content { padding: 20px; background-color: white; }
              .field { margin-bottom: 15px; border-bottom: 1px solid #eee; padding-bottom: 10px; }
              .label { font-weight: bold; color: #1a4d2e; width: 150px; display: inline-block; }
              .value { color: #333; }
              .message-box { background-color: #f5f5f5; padding: 15px; border-left: 4px solid #1a4d2e; margin-top: 20px; border-radius: 4px; }
              .footer { font-size: 12px; color: #888; text-align: center; margin-top: 20px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2 style="margin:0;">Nouvelle demande de contact</h2>
              </div>
              <div class="content">
                <div class="field">
                  <span class="label">Client :</span>
                  <span class="value">${name}</span>
                </div>
                <div class="field">
                  <span class="label">Email :</span>
                  <span class="value"><a href="mailto:${email}">${email}</a></span>
                </div>
                <div class="field">
                  <span class="label">Téléphone :</span>
                  <span class="value"><a href="tel:${phone}">${phone}</a></span>
                </div>
                <div class="field">
                  <span class="label">Service :</span>
                  <span class="value"><strong>${service}</strong></span>
                </div>
                
                <div class="message-box">
                  <div style="font-weight:bold; margin-bottom:5px;">Message :</div>
                  ${message.replace(/\n/g, '<br>')}
                </div>
              </div>
              <div class="footer">
                Ce message a été envoyé depuis le formulaire de contact de unityvert.fr
              </div>
            </div>
          </body>
        </html>
      `,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
