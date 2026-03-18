<script setup>
import ToggleSwitch from './ToggleSwitch.vue'
const isOpen = ref(false)
const mode = ref(false)
const colorMode = useColorMode()

function toggle_open() {
  isOpen.value = !isOpen.value
}

colorMode.preference = computed(() => (mode.value ? 'dark' : 'light'))
</script>

<template>
  <div id="navbar-pc">
    <div class="navbar">
      <div class="list">
        <UButton size="md" color="primary" class="logo">Motocenter</UButton>
        <ToggleSwitch v-model="mode" />
      </div>
      <div class="list">
        <UButton size="md" color="neutral" variant="ghost">Comparateur</UButton>
        <UButton size="md" color="neutral" variant="ghost">Forum</UButton>
        <UButton size="md" color="neutral" variant="ghost">Balades</UButton>
        <UButton size="md" color="neutral" variant="ghost"
          >Nous connaitre</UButton
        >
        <UButton
          trailing-icon="i-lucide-arrow-right"
          size="md"
          color="neutral"
          class="rounded-full"
          >Connexion</UButton
        >
      </div>
    </div>
  </div>
  <div id="navbar-mobile">
    <div class="navbar">
      <div class="list">
        <UButton size="md" color="primary" class="logo">Motocenter</UButton>
        <ToggleSwitch v-model="mode" />
      </div>
      <UIcon
        :name="isOpen ? 'i-lucide-chevron-down' : 'i-lucide-menu'"
        class="size-10"
        @click="toggle_open"
      />
    </div>
    <div v-if="isOpen" class="list-mobile">
      <UButton
        size="md"
        color="neutral"
        variant="ghost"
        style="justify-content: center"
        >Comparateur</UButton
      >
      <UButton
        size="md"
        color="neutral"
        variant="ghost"
        style="justify-content: center"
        >Forum</UButton
      >
      <UButton
        size="md"
        color="neutral"
        variant="ghost"
        style="justify-content: center"
        >Balades</UButton
      >
      <UButton
        size="md"
        color="neutral"
        variant="ghost"
        style="justify-content: center"
        >Nous connaitre</UButton
      >
      <UButton
        size="md"
        color="neutral"
        variant="ghost"
        style="justify-content: center"
        >Connexion</UButton
      >
      <UButton
        size="md"
        color="neutral"
        variant="ghost"
        style="justify-content: center"
        >Mon profil</UButton
      >
    </div>
  </div>
</template>

<style scoped>
.navbar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: var(--background);

  padding: 10px;

  position: sticky;
  top: 0;
}

.logo {
  font-size: 1rem;
  font-weight: bold;

  padding: 10px 25px;

  color: white;
}

/** Style version PC */
@media (max-width: 1024px) {
  #navbar-pc {
    display: none;
  }
}

.list {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 40px;
}

/** Style version mobile */

@media (min-width: 1024px) {
  #navbar-mobile {
    display: none;
  }
}

.list-mobile {
  display: flex;
  flex-direction: column;
  gap: 10px;

  text-align: center;

  background-color: white;
}
</style>
