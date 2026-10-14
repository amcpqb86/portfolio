<script setup lang="ts">
const { global } = useAppConfig()

const title = 'DVD Library – Assistance'
const description = 'Aide et contact pour l’app DVD Library : questions fréquentes et assistance par e-mail.'

useSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description
})

const faq = [
  {
    label: 'Comment ajouter un disque ?',
    content: 'Touchez le bouton + rouge en haut de la collection, puis choisissez « Scanner un code-barres » pour viser le code-barres du boîtier, ou « Rechercher un film » pour chercher par titre ou par code EAN.'
  },
  {
    label: 'Pourquoi mon disque est-il introuvable ?',
    content: 'Le catalogue couvre les éditions vendues en France. Une édition étrangère, très ancienne ou très récente peut ne pas encore y figurer. Essayez de chercher par titre plutôt que par code-barres.'
  },
  {
    label: 'Le scanner ne s’ouvre pas',
    content: 'L’app a besoin de l’accès à l’appareil photo. Si vous l’avez refusé, ouvrez Réglages › DVD Library et activez « Appareil photo ». Sans appareil photo, vous pouvez saisir le code EAN à la main.'
  },
  {
    label: 'Comment synchroniser ma collection entre mes appareils ?',
    content: 'La synchronisation passe par iCloud. Vérifiez que vous êtes connecté au même compte iCloud sur vos appareils et qu’iCloud Drive est activé. La synchronisation peut prendre quelques minutes.'
  },
  {
    label: 'À quoi correspondent le total dépensé et la valeur estimée ?',
    content: 'Le total dépensé additionne les prix d’achat que vous avez saisis. La valeur estimée additionne les prix publics actuels des disques, ou le prix payé lorsque le prix public est inconnu.'
  },
  {
    label: 'L’app est-elle disponible en d’autres langues ?',
    content: 'Non. Le catalogue utilisé est français (titres, synopsis, éditions), l’app est donc proposée uniquement en français.'
  },
  {
    label: 'Mes données sont-elles collectées ?',
    content: 'Non. Votre collection reste sur votre appareil et dans votre iCloud privé. Consultez la politique de confidentialité pour le détail.'
  }
]
</script>

<template>
  <UPage>
    <UPageHero
      title="Assistance"
      description="DVD Library – application iOS de gestion de collection de DVD et Blu-ray."
      :ui="{
        title: '!mx-0 text-left',
        description: '!mx-0 text-left',
        links: 'justify-start'
      }"
    >
      <template #links>
        <div class="flex flex-wrap items-center gap-2">
          <UButton
            label="Nous écrire"
            icon="i-lucide-mail"
            :to="`mailto:${global.email}?subject=DVD%20Library`"
          />
          <UButton
            label="Politique de confidentialité"
            color="neutral"
            variant="outline"
            to="/dvd-library/confidentialite"
          />
        </div>
      </template>
    </UPageHero>

    <UPageSection
      :ui="{
        container: '!pt-0'
      }"
    >
      <div class="max-w-2xl space-y-10">
        <section class="space-y-3">
          <h2 class="text-xl font-semibold text-highlighted">
            Questions fréquentes
          </h2>
          <UAccordion
            :items="faq"
            type="multiple"
            :ui="{
              trigger: 'text-base',
              body: 'text-muted leading-relaxed'
            }"
          />
        </section>

        <section class="space-y-3">
          <h2 class="text-xl font-semibold text-highlighted">
            Une autre question ?
          </h2>
          <p class="text-muted leading-relaxed">
            Écrivez à
            <ULink
              :to="`mailto:${global.email}?subject=DVD%20Library`"
              class="text-primary"
            >
              {{ global.email }}
            </ULink>
            en précisant votre modèle d’iPhone et, si possible, le code EAN du disque concerné. Une réponse vous sera apportée dans les meilleurs délais.
          </p>
        </section>
      </div>
    </UPageSection>
  </UPage>
</template>
