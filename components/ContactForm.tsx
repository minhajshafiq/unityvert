'use client'

import { useState } from 'react'

const serviceOptions: Record<string, string> = {
  entretien: 'Entretien de jardin',
  taille: 'Tonte & Taille de haies',
  elagage: 'Élagage & Abattage',
  amenagement: 'Aménagement paysager',
  debroussaillage: 'Débroussaillage',
  autre: 'Autre demande',
}

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone || 'Non renseigné',
          service: formData.service ? serviceOptions[formData.service] : 'Non spécifié',
          message: formData.message,
        }),
      })

      if (!response.ok) throw new Error('Erreur lors de l\'envoi')

      setStatus('success')
      setFormData({ name: '', email: '', phone: '', service: '', message: '' })
    } catch (error) {
      console.error('Erreur:', error)
      setStatus('error')
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-text mb-2">
            Nom complet *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="Jean Dupont"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-text mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="jean@exemple.fr"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-text mb-2">
            Téléphone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="06 12 34 56 78"
          />
        </div>
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-text mb-2">
            Service souhaité
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white"
          >
            <option value="">Sélectionner un service</option>
            <option value="entretien">Entretien de jardin</option>
            <option value="taille">Tonte & Taille de haies</option>
            <option value="elagage">Élagage & Abattage</option>
            <option value="amenagement">Aménagement paysager</option>
            <option value="debroussaillage">Débroussaillage</option>
            <option value="autre">Autre demande</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-text mb-2">
          Votre message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
          placeholder="Décrivez votre projet ou vos besoins..."
        />
      </div>

      <div className="flex items-start space-x-2">
        <input
          type="checkbox"
          id="consent"
          required
          className="mt-1 w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
        />
        <label htmlFor="consent" className="text-sm text-text-light">
          J'accepte que mes données soient utilisées pour traiter ma demande.
          Consultez notre{' '}
          <a href="/mentions-legales#confidentialite" className="text-primary hover:underline">
            politique de confidentialité
          </a>
          .
        </label>
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
      >
        {status === 'loading' ? (
          <>
            <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            <span>Envoi en cours...</span>
          </>
        ) : (
          <span>Envoyer ma demande</span>
        )}
      </button>

      {status === 'success' && (
        <div className="p-4 bg-green-50 text-green-800 rounded-lg">
          Merci pour votre message ! Nous vous répondrons dans les plus brefs délais.
        </div>
      )}

      {status === 'error' && (
        <div className="p-4 bg-red-50 text-red-800 rounded-lg">
          Une erreur est survenue. Veuillez vérifier votre connexion ou nous contacter par téléphone.
        </div>
      )}
    </form>
  )
}
