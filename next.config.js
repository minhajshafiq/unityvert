/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // Compression et minification
  compress: true,
  // Pas de trailing slash pour les URLs
  trailingSlash: false,
  // Headers de sécurité et cache
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // Empêche le sniffing MIME
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          // Empêche le clickjacking
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          // Protection XSS legacy
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          // Politique de référent
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          // Force HTTPS (HSTS) - 1 an avec sous-domaines
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
          // Content Security Policy
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com data:",
              "img-src 'self' data: blob: https://cdn.sanity.io https://*.tile.openstreetmap.org https://unpkg.com",
              "connect-src 'self' https://cdn.sanity.io https://*.sanity.io",
              "frame-ancestors 'none'",
              "base-uri 'self'",
              "form-action 'self'",
              "upgrade-insecure-requests",
            ].join('; '),
          },
          // Permissions Policy - désactive les APIs sensibles
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
          },
          // Empêche l'inclusion dans d'autres sites
          {
            key: 'X-Permitted-Cross-Domain-Policies',
            value: 'none',
          },
        ],
      },
      {
        // Cache pour les assets statiques
        source: '/images/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Cache pour les fonts
        source: '/fonts/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
