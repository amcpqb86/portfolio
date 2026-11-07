<script setup lang="ts">
const { global } = useAppConfig()

const title = 'Starshelf – Politique de confidentialité'
const description = 'Comment l’app Starshelf traite vos données : sans publicité, sans pistage.'

useSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description,
  ogImage: '/starshelf.png'
})

const sections = [
  {
    title: 'En résumé',
    paragraphs: [
      'Starshelf ne vend ni ne partage vos données. L’app ne contient ni publicité, ni outil de mesure d’audience, ni pistage. Votre bibliothèque reste sur votre appareil et dans votre iCloud privé.'
    ]
  },
  {
    title: 'Compte GitHub',
    paragraphs: [
      'Pour importer vos favoris, Starshelf vous connecte à GitHub. L’autorisation se fait sur le site de GitHub et ne demande aucune permission : l’app lit uniquement vos données publiques (profil et repos étoilés).',
      'Le jeton d’accès fourni par GitHub est conservé dans le trousseau (Keychain) de votre appareil. Il n’est ni synchronisé, ni envoyé ailleurs qu’à GitHub. Se déconnecter dans l’app le supprime ; vous pouvez aussi révoquer l’accès depuis les réglages de votre compte GitHub.'
    ]
  },
  {
    title: 'Échanges avec GitHub',
    paragraphs: [
      'L’app interroge directement l’API de GitHub (api.github.com) pour récupérer vos favoris, les informations des repos et leurs README, puis télécharge les images des README depuis les serveurs de GitHub.',
      'Ces requêtes passent sans intermédiaire entre votre appareil et GitHub. Le traitement de ces données par GitHub relève de sa propre politique de confidentialité.'
    ]
  },
  {
    title: 'Votre bibliothèque',
    paragraphs: [
      'Vos catégories, le classement de vos repos, leurs statuts et vos notes sont enregistrés sur votre appareil.',
      'Si iCloud est activé, ces données sont synchronisées entre vos appareils via votre compte iCloud privé (CloudKit). Elles sont stockées par Apple dans votre espace iCloud personnel : le développeur n’y a pas accès.',
      'Pour la recherche Spotlight et le widget, l’app indexe vos repos localement sur votre appareil.'
    ]
  },
  {
    title: 'Résumés IA',
    paragraphs: [
      'Les résumés de README sont générés sur votre appareil par Apple Intelligence. Le texte du README n’est envoyé à aucun serveur.'
    ]
  },
  {
    title: 'Achats',
    paragraphs: [
      'Les achats de Starshelf Pro passent par l’App Store et sont gérés par Apple. Pour vérifier votre statut Pro, l’app utilise le service RevenueCat, qui reçoit un identifiant anonyme généré par l’app et l’historique d’achats associé. Aucune donnée de paiement n’est transmise au développeur.'
    ]
  },
  {
    title: 'Enfants',
    paragraphs: [
      'L’app ne s’adresse pas spécifiquement aux enfants et ne collecte sciemment aucune donnée les concernant.'
    ]
  },
  {
    title: 'Suppression de vos données',
    paragraphs: [
      'Vous pouvez réinitialiser le classement de vos repos et vous déconnecter de GitHub depuis les Réglages de l’app. Supprimer l’app efface les données de l’appareil ; les données synchronisées se gèrent depuis les réglages iCloud de votre appareil.'
    ]
  },
  {
    title: 'Modifications',
    paragraphs: [
      'Cette politique peut évoluer avec l’app. Toute modification sera publiée sur cette page.'
    ]
  }
]
</script>

<template>
  <StarshelfTheme>
    <UPage>
      <UPageHero
        title="Politique de confidentialité"
        description="Starshelf – application iOS pour ranger ses favoris GitHub."
        :ui="{
          title: '!mx-0 text-left',
          description: '!mx-0 text-left'
        }"
      >
        <template #headline>
          <img
            src="/starshelf-square.png"
            alt="Starshelf"
            class="size-16 rounded-2xl"
          >
        </template>
      </UPageHero>
      <UPageSection
        :ui="{
          container: '!pt-0'
        }"
      >
        <div class="max-w-2xl space-y-10">
          <section
            v-for="section in sections"
            :key="section.title"
            class="space-y-3"
          >
            <h2 class="text-xl font-semibold text-highlighted">
              {{ section.title }}
            </h2>
            <p
              v-for="(paragraph, index) in section.paragraphs"
              :key="index"
              class="text-muted leading-relaxed"
            >
              {{ paragraph }}
            </p>
          </section>

          <section class="space-y-3">
            <h2 class="text-xl font-semibold text-highlighted">
              Contact
            </h2>
            <p class="text-muted leading-relaxed">
              Pour toute question sur cette politique :
              <ULink
                :to="`mailto:${global.email}?subject=Starshelf`"
                class="ss-link"
              >
                {{ global.email }}
              </ULink>
            </p>
          </section>

          <p class="text-sm text-dimmed">
            Dernière mise à jour : 7 novembre 2026
          </p>
        </div>
      </UPageSection>
    </UPage>
  </StarshelfTheme>
</template>
