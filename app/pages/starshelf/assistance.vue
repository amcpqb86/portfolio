<script setup lang="ts">
const { global } = useAppConfig()

const title = 'Starshelf – Assistance'
const description = 'Aide et contact pour l’app Starshelf : questions fréquentes et assistance par e-mail.'

useSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description,
  ogImage: '/starshelf.png'
})

const faq = [
  {
    label: 'Comment connecter mon compte GitHub ?',
    content: 'Au premier lancement, touchez « Se connecter avec GitHub ». L’app affiche un code à saisir sur github.com/login/device. Une fois le code validé, vos favoris sont importés. Starshelf ne demande aucune permission d’écriture : il lit seulement vos données publiques.'
  },
  {
    label: 'Comment trier mes favoris ?',
    content: 'Vos nouveaux favoris arrivent dans l’onglet En attente, sous forme de pile de cartes. Glissez à droite pour accepter la catégorie suggérée, à gauche pour ne pas l’ajouter, vers le haut pour choisir vous-même. Touchez une carte pour lire son README. Le bouton d’annulation en haut de l’écran revient sur le dernier geste.'
  },
  {
    label: 'Un repo récemment étoilé n’apparaît pas',
    content: 'Starshelf récupère vos favoris à l’ouverture de l’app. Pour forcer une mise à jour, touchez le bouton de synchronisation de l’onglet En attente. Les repos que vous avez retirés de vos favoris sur GitHub sont regroupés à part, dans « Retirés de GitHub ».'
  },
  {
    label: 'Comment fonctionnent les suggestions de catégories ?',
    content: 'Starshelf compare la description, les thèmes et le langage du repo avec vos catégories. Ce n’est qu’une suggestion : vous gardez toujours le dernier mot.'
  },
  {
    label: 'Le résumé IA n’est pas disponible',
    content: 'Les résumés sont générés sur votre appareil grâce à Apple Intelligence. Il faut un iPhone ou un iPad compatible, Apple Intelligence activé dans les Réglages, et Starshelf Pro.'
  },
  {
    label: 'Comment synchroniser ma bibliothèque entre iPhone et iPad ?',
    content: 'La synchronisation passe par iCloud. Vérifiez que vous êtes connecté au même compte iCloud sur vos appareils et qu’iCloud Drive est activé. La synchronisation peut prendre quelques minutes.'
  },
  {
    label: 'Que débloque Starshelf Pro ?',
    content: 'La version gratuite permet jusqu’à 10 catégories. Starshelf Pro débloque les catégories illimitées et les résumés IA, en abonnement annuel ou en achat unique à vie.'
  },
  {
    label: 'Comment restaurer mon achat ou résilier mon abonnement ?',
    content: 'Pour restaurer un achat, ouvrez l’écran Starshelf Pro et touchez « Restaurer ». L’abonnement se gère et se résilie depuis Réglages › [votre nom] › Abonnements sur votre appareil.'
  },
  {
    label: 'Puis-je exporter ma bibliothèque ?',
    content: 'Oui. Dans Réglages, « Exporter en JSON » crée un fichier avec vos catégories et le classement de vos repos, à partager ou à enregistrer où vous voulez.'
  },
  {
    label: 'Mes données sont-elles collectées ?',
    content: 'Non. Votre bibliothèque reste sur votre appareil et dans votre iCloud privé, sans publicité ni pistage. Consultez la politique de confidentialité pour le détail.'
  }
]
</script>

<template>
  <StarshelfTheme>
    <UPage>
      <UPageHero
        title="Assistance"
        description="Starshelf – application iOS pour ranger ses favoris GitHub."
        :ui="{
          title: '!mx-0 text-left',
          description: '!mx-0 text-left',
          links: 'justify-start'
        }"
      >
        <template #headline>
          <img
            src="/starshelf-square.png"
            alt="Starshelf"
            class="size-16 rounded-2xl"
          >
        </template>
        <template #links>
          <div class="flex flex-wrap items-center gap-2">
            <UButton
              label="Nous écrire"
              icon="i-lucide-mail"
              :to="`mailto:${global.email}?subject=Starshelf`"
            />
            <UButton
              label="Politique de confidentialité"
              color="neutral"
              variant="outline"
              to="/starshelf/confidentialite"
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
                :to="`mailto:${global.email}?subject=Starshelf`"
                class="ss-link"
              >
                {{ global.email }}
              </ULink>
              en précisant votre modèle d’iPhone ou d’iPad et, si possible, le repo concerné. Une réponse vous sera apportée dans les meilleurs délais.
            </p>
          </section>
        </div>
      </UPageSection>
    </UPage>
  </StarshelfTheme>
</template>
