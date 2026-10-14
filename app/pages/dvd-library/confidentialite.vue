<script setup lang="ts">
const { global } = useAppConfig()

const title = 'DVD Library – Politique de confidentialité'
const description = 'Comment l’app DVD Library traite vos données : aucune collecte, aucun suivi.'

useSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description
})

const sections = [
  {
    title: 'En résumé',
    paragraphs: [
      'DVD Library ne collecte aucune donnée personnelle. L’app ne contient ni publicité, ni outil de mesure d’audience, ni suivi, et ne nécessite aucun compte.'
    ]
  },
  {
    title: 'Votre collection',
    paragraphs: [
      'Les disques que vous ajoutez, ainsi que vos favoris, notes et informations d’achat (prix, date, lieu), sont enregistrés uniquement sur votre appareil.',
      'Si iCloud est activé sur votre appareil, ces données sont synchronisées entre vos appareils via votre compte iCloud privé (CloudKit). Elles sont stockées par Apple dans votre espace iCloud personnel : le développeur n’y a pas accès.'
    ]
  },
  {
    title: 'Appareil photo',
    paragraphs: [
      'L’appareil photo sert uniquement à lire le code-barres des boîtiers. L’analyse se fait sur votre appareil : aucune image n’est enregistrée ni envoyée.'
    ]
  },
  {
    title: 'Recherche de disques',
    paragraphs: [
      'Pour trouver un disque, le titre saisi ou le code EAN scanné est envoyé au service mybluray.fr, qui renvoie les informations du catalogue (titre, jaquette, synopsis, prix). Les jaquettes sont téléchargées depuis les serveurs d’images de ce catalogue.',
      'Ces requêtes ne contiennent aucun identifiant personnel. Comme toute connexion internet, elles transmettent votre adresse IP au service contacté.'
    ]
  },
  {
    title: 'Enfants',
    paragraphs: [
      'L’app ne collecte aucune donnée, y compris auprès des enfants.'
    ]
  },
  {
    title: 'Suppression de vos données',
    paragraphs: [
      'Vous pouvez supprimer un disque à tout moment depuis l’app. Supprimer l’app efface les données de l’appareil ; les données synchronisées se gèrent depuis les réglages iCloud de votre appareil.'
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
  <UPage>
    <UPageHero
      title="Politique de confidentialité"
      description="DVD Library – application iOS de gestion de collection de DVD et Blu-ray."
      :ui="{
        title: '!mx-0 text-left',
        description: '!mx-0 text-left'
      }"
    />
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
              :to="`mailto:${global.email}`"
              class="text-primary"
            >
              {{ global.email }}
            </ULink>
          </p>
        </section>

        <p class="text-sm text-dimmed">
          Dernière mise à jour : 14 octobre 2026
        </p>
      </div>
    </UPageSection>
  </UPage>
</template>
