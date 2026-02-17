import { Resend } from 'resend';
import { NextResponse } from 'next/server';

// Edge runtime pour Cloudflare Pages
export const runtime = 'edge';

const resend = new Resend(process.env.RESEND_API_KEY);

// ===== SANITIZATION =====
function sanitizeHtml(str: string): string {
  if (typeof str !== 'string') return '';

  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;')
    .trim();
}

// ===== VALIDATION =====
interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

interface ValidationResult {
  isValid: boolean;
  errors: string[];
}

function validateFormData(data: unknown): ValidationResult {
  const errors: string[] = [];

  if (!data || typeof data !== 'object') {
    return { isValid: false, errors: ['Données invalides'] };
  }

  const { name, email, phone, service, message } = data as ContactFormData;

  // Validation du nom
  if (!name || typeof name !== 'string') {
    errors.push('Le nom est requis');
  } else if (name.length < 2 || name.length > 100) {
    errors.push('Le nom doit contenir entre 2 et 100 caractères');
  }

  // Validation de l'email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || typeof email !== 'string') {
    errors.push('L\'email est requis');
  } else if (!emailRegex.test(email)) {
    errors.push('Format d\'email invalide');
  } else if (email.length > 254) {
    errors.push('Email trop long');
  }

  // Validation du téléphone (optionnel mais si présent, doit être valide)
  if (phone && typeof phone === 'string' && phone !== 'Non renseigné') {
    const phoneClean = phone.replace(/[\s.-]/g, '');
    const phoneRegex = /^(?:(?:\+|00)33|0)[1-9](?:[0-9]{8})$/;
    if (!phoneRegex.test(phoneClean) && phoneClean.length > 0) {
      errors.push('Format de téléphone invalide');
    }
  }

  // Validation du service
  const validServices = [
    'Entretien de jardin',
    'Tonte & Taille de haies',
    'Élagage & Abattage',
    'Aménagement paysager',
    'Débroussaillage',
    'Autre demande',
    'Non spécifié',
  ];
  if (service && typeof service === 'string' && !validServices.includes(service)) {
    errors.push('Service invalide');
  }

  // Validation du message
  if (!message || typeof message !== 'string') {
    errors.push('Le message est requis');
  } else if (message.length < 10) {
    errors.push('Le message doit contenir au moins 10 caractères');
  } else if (message.length > 5000) {
    errors.push('Le message est trop long (max 5000 caractères)');
  }

  // Détection de spam basique
  const spamPatterns = [
    /\b(viagra|casino|lottery|winner|click here|buy now)\b/i,
    /(https?:\/\/[^\s]+){3,}/i, // Plus de 3 URLs
    /(.)\1{10,}/i, // Caractères répétés plus de 10 fois
  ];

  const fullContent = `${name} ${email} ${message}`;
  for (const pattern of spamPatterns) {
    if (pattern.test(fullContent)) {
      errors.push('Message détecté comme spam');
      break;
    }
  }

  return { isValid: errors.length === 0, errors };
}

// ===== API ROUTE =====
export async function POST(request: Request) {
  try {
    // Récupérer l'IP pour le logging
    const forwardedFor = request.headers.get('x-forwarded-for');
    const ip = forwardedFor?.split(',')[0]?.trim() || 'unknown';

    // Parser le body
    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { error: 'Format de requête invalide' },
        { status: 400 }
      );
    }

    // Valider les données
    const validation = validateFormData(body);
    if (!validation.isValid) {
      return NextResponse.json(
        { error: validation.errors.join(', ') },
        { status: 400 }
      );
    }

    const { name, email, phone, service, message } = body as ContactFormData;

    // Sanitizer toutes les entrées
    const safeName = sanitizeHtml(name);
    const safeEmail = sanitizeHtml(email);
    const safePhone = sanitizeHtml(phone || 'Non renseigné');
    const safeService = sanitizeHtml(service || 'Non spécifié');
    const safeMessage = sanitizeHtml(message).replace(/\n/g, '<br>');

    // Envoyer l'email
    const data = await resend.emails.send({
      from: 'Unity Vert <formulaire@minhajshafiq.com>',
      to: ['unityvert@gmail.com'],
      replyTo: email,
      subject: `🌿 Devis : ${safeService} - ${safeName}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
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
              .security-notice { font-size: 10px; color: #aaa; margin-top: 10px; }
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
                  <span class="value">${safeName}</span>
                </div>
                <div class="field">
                  <span class="label">Email :</span>
                  <span class="value">${safeEmail}</span>
                </div>
                <div class="field">
                  <span class="label">Téléphone :</span>
                  <span class="value">${safePhone}</span>
                </div>
                <div class="field">
                  <span class="label">Service :</span>
                  <span class="value"><strong>${safeService}</strong></span>
                </div>

                <div class="message-box">
                  <div style="font-weight:bold; margin-bottom:5px;">Message :</div>
                  ${safeMessage}
                </div>
              </div>
              <div class="footer">
                Ce message a été envoyé depuis le formulaire de contact de unityvert.fr
                <div class="security-notice">IP: ${sanitizeHtml(ip)}</div>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Erreur API send:', error);
    return NextResponse.json(
      { error: 'Une erreur est survenue lors de l\'envoi du message' },
      { status: 500 }
    );
  }
}
