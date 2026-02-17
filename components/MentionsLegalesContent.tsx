'use client'

import ScrollAnimator from './ScrollAnimator'

export default function MentionsLegalesContent() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom mx-auto max-w-4xl">
        <ScrollAnimator animation="fade-up">
          <h1 className="text-3xl md:text-4xl font-bold text-text mb-8">
            Mentions legales
          </h1>
        </ScrollAnimator>

        <div className="prose prose-lg max-w-none text-text-light">
          <ScrollAnimator animation="fade-up" delay={100}>
            <h2 className="text-2xl font-semibold text-text mt-8 mb-4">
              1. Editeur du site
            </h2>
            <p>
              Le site unityvert.fr est edite par :<br />
              <strong>Unity Vert</strong><br />
              17 rue Bethisy<br />
              93130 Noisy-le-Sec<br />
              France
            </p>
            <p>
              Telephone : 07 43 45 53 49 / 06 59 26 85 02<br />
              Email : unityvert@gmail.com
            </p>
            <p>
              SIRET : [Numero SIRET a completer]<br />
              Responsable de la publication : [Nom du responsable]
            </p>
          </ScrollAnimator>

          <ScrollAnimator animation="fade-up" delay={150}>
            <h2 className="text-2xl font-semibold text-text mt-8 mb-4">
              2. Hebergement
            </h2>
            <p>
              Ce site est heberge par :<br />
              Vercel Inc.<br />
              340 S Lemon Ave #4133<br />
              Walnut, CA 91789, USA<br />
              https://vercel.com
            </p>
          </ScrollAnimator>

          <ScrollAnimator animation="fade-up" delay={200}>
            <h2 className="text-2xl font-semibold text-text mt-8 mb-4">
              3. Propriete intellectuelle
            </h2>
            <p>
              L'ensemble des contenus presents sur le site unityvert.fr (textes,
              images, logos, icones, photographies) sont proteges par le droit
              d'auteur et restent la propriete exclusive de Unity Vert, sauf
              mention contraire.
            </p>
            <p>
              Toute reproduction, representation, modification, publication ou
              adaptation de tout ou partie des elements du site est interdite, sauf
              autorisation ecrite prealable de Unity Vert.
            </p>
          </ScrollAnimator>

          <ScrollAnimator animation="fade-up" delay={250}>
            <h2
              id="confidentialite"
              className="text-2xl font-semibold text-text mt-8 mb-4"
            >
              4. Politique de confidentialite
            </h2>

            <h3 className="text-xl font-semibold text-text mt-6 mb-3">
              4.1 Collecte des donnees
            </h3>
            <p>
              Les donnees personnelles collectees via le formulaire de contact sont :
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Nom et prenom</li>
              <li>Adresse email</li>
              <li>Numero de telephone (facultatif)</li>
              <li>Message</li>
            </ul>
            <p>
              Ces donnees sont collectees uniquement dans le but de repondre a vos
              demandes de devis ou d'informations.
            </p>

            <h3 className="text-xl font-semibold text-text mt-6 mb-3">
              4.2 Utilisation des donnees
            </h3>
            <p>
              Vos donnees personnelles sont utilisees exclusivement pour :
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Repondre a vos demandes de contact ou de devis</li>
              <li>Vous recontacter dans le cadre de votre demande</li>
            </ul>
            <p>
              Vos donnees ne sont jamais vendues, cedees ou transmises a des tiers
              a des fins commerciales.
            </p>

            <h3 className="text-xl font-semibold text-text mt-6 mb-3">
              4.3 Conservation des donnees
            </h3>
            <p>
              Vos donnees personnelles sont conservees pendant une duree de 3 ans a
              compter de votre derniere interaction avec Unity Vert, conformement
              aux recommandations de la CNIL.
            </p>

            <h3 className="text-xl font-semibold text-text mt-6 mb-3">
              4.4 Vos droits
            </h3>
            <p>
              Conformement au Reglement General sur la Protection des Donnees
              (RGPD), vous disposez des droits suivants :
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Droit d'acces a vos donnees personnelles</li>
              <li>Droit de rectification</li>
              <li>Droit a l'effacement</li>
              <li>Droit a la limitation du traitement</li>
              <li>Droit a la portabilite</li>
              <li>Droit d'opposition</li>
            </ul>
            <p>
              Pour exercer ces droits, contactez-nous a : unityvert@gmail.com
            </p>
          </ScrollAnimator>

          <ScrollAnimator animation="fade-up" delay={300}>
            <h2 className="text-2xl font-semibold text-text mt-8 mb-4">
              5. Cookies
            </h2>
            <p>
              Ce site utilise des cookies techniques necessaires a son bon
              fonctionnement. Aucun cookie de suivi publicitaire n'est utilise.
            </p>
            <p>
              Les cookies techniques utilises sont :
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Cookies de session : necessaires a la navigation sur le site
              </li>
              <li>
                Cookies de preferences : memorisation de vos choix (theme, langue)
              </li>
            </ul>
          </ScrollAnimator>

          <ScrollAnimator animation="fade-up" delay={350}>
            <h2 className="text-2xl font-semibold text-text mt-8 mb-4">
              6. Limitation de responsabilite
            </h2>
            <p>
              Unity Vert s'efforce d'assurer l'exactitude et la mise a jour des
              informations diffusees sur ce site. Toutefois, Unity Vert ne peut
              garantir l'exactitude, la precision ou l'exhaustivite des
              informations mises a disposition.
            </p>
            <p>
              Unity Vert decline toute responsabilite pour tout dommage resultant
              d'une intrusion frauduleuse d'un tiers ayant entraine une
              modification des informations mises a disposition sur le site.
            </p>
          </ScrollAnimator>

          <ScrollAnimator animation="fade-up" delay={400}>
            <h2 className="text-2xl font-semibold text-text mt-8 mb-4">
              7. Droit applicable
            </h2>
            <p>
              Les presentes mentions legales sont soumises au droit francais. En
              cas de litige, les tribunaux francais seront seuls competents.
            </p>

            <p className="mt-8 text-sm">
              Derniere mise a jour : {new Date().toLocaleDateString('fr-FR')}
            </p>
          </ScrollAnimator>
        </div>
      </div>
    </section>
  )
}
