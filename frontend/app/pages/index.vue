<script setup lang="ts"></script>
<template>
  <main>
    <section class="hero-header">
      <h1 class="title">
        Trouver <span style="color: var(--ui-primary)">la moto</span>
        <br />
        qui vous convient
      </h1>

      <div class="list">
        <UButton size="xl" color="primary" class="rounded-full"
          >Essayer</UButton
        >
        <UButton
          size="xl"
          color="neutral"
          class="rounded-full"
          trailing-icon="i-lucide-arrow-right"
          variant="outline"
          >Se connecter</UButton
        >
      </div>

      <div class="list">
        <img
          src="/assets/images/accueil/R1_fond.png"
          alt="Moto"
          class="w-96 h-auto"
        />
        <img
          src="/assets/images/accueil/BMW_fond.png"
          alt="Moto"
          class="w-96 h-auto"
        />
      </div>
    </section>
    <section>
      <div class="list">
        <article>
          <h2>Un peu d'histoire</h2>
          <p>
            Depuis que l’homme a inventé le moteur thermique, il a toujours
            cherché à repousser ses limites : plus de puissance, plus de couple,
            plus de vitesse. Depuis 1868, des milliers de modèles de motos ont
            vu le jour. Et si toi aussi tu veux savoir laquelle correspond le
            mieux à ce que tu recherches ...
          </p>
        </article>
        <img
          src="/assets/images/accueil/Hornet.png"
          alt="Moto"
          class="w-96 h-auto"
        />
      </div>
    </section>
    <section>
      <h2 style="text-align: center">
        <span style="color: var(--ui-primary)">Motocenter</span>
        en quelques chiffres
      </h2>
      <article class="column">
        <div class="row justify-content-center">
          <div class="box">
            <img src="/assets/images/accueil/icon_Binocle.png" />
            <p>80 Marques</p>
          </div>
          <div class="box">
            <img src="/assets/images/accueil/icon_Settings.png" />
            <p>10 000 ch</p>
          </div>
          <div class="box">
            <img src="/assets/images/accueil/icon_moto.png" />
            <p>3560 modèles</p>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="box">
            <img src="/assets/images/accueil/icon_checked_classic.png" />
            <p>Base de données complètes</p>
          </div>
          <div class="box">
            <img src="/assets/images/accueil/icon_clock.png" />
            <p>Communautée active</p>
          </div>
          <div class="box">
            <img src="/assets/images/accueil/icon_idea.png" />
            <p>Equipe passionée</p>
          </div>
        </div>
      </article>
    </section>
    <section>
      <h2 style="text-align: center">Les best-sellers</h2>
      <article></article>
    </section>
    <section class="invitation justify-content-center">
      <h3 style="text-align: center">Tester le comparateur dès maintenant !</h3>
      <div>
        <UButton
          size="xl"
          color="primary"
          class="rounded-full"
          style="font-size: small"
          >Essayer</UButton
        >
      </div>
    </section>
  </main>
</template>
<style scoped>
main {
  display: flex;
  flex-direction: column;
  gap: 5rem;
}

section {
  margin: 0 10%;
}

.hero-header {
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  height: 100vh;
}

.title {
  text-align: center;
}

.list {
  display: flex;
  flex-direction: row;
  gap: 1rem;
}

.row {
  display: flex;
  flex-direction: row;
  gap: 3.5rem;

  margin: 0 10%;
}

.column {
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
}

.justify-content-center {
  justify-content: center;
}

.box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  gap: 1rem;

  border: solid 3px var(--ui-primary);
  border-radius: 10px;

  width: 100%;
  aspect-ratio: 1 / 1;
}

.box img {
  width: 75px;
  height: auto;
}

.invitation {
  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 40px;
  background-color: antiquewhite;

  margin: 0 20%;
  padding: 4rem;

  gap: 3rem;
}
</style>
