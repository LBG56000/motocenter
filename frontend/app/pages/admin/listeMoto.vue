<script setup lang="ts">
import Header from '~/components/admin/Header.vue'
import { h, resolveComponent } from 'vue'
import type { TableColumn } from '@nuxt/ui'
import { IMotorcycle } from '~/types/motorcycle.interface'

definePageMeta({
  layout: 'admin'
})

const UBadge = resolveComponent('UBadge')
const apiBack = useRuntimeConfig().public.apiback
const motos = ref<IMotorcycle[]>([])
const showCardMoto = ref(false)

const columns = [
  { accessorKey: 'brand', header: 'Marque' },
  { accessorKey: 'model', header: 'Modèle' },
  { accessorKey: 'year', header: 'Année' },
  {
    accessorKey: 'published',
    header: 'statut',
    cell: ({ row }) => {
      const value = row.getValue('published') as boolean

      const color = value ? 'success' : 'error'
      const label = value ? 'complète' : 'Incomplète'

      return h(
        UBadge,
        { variant: 'subtle', color, class: 'capitalize' },
        () => label
      )
    }
  },
  {
    accessorKey: 'is_public',
    header: 'Statut',
    cell: ({ row }) => {
      const value = row.getValue('is_public') as boolean
      const label = value ? 'Oui' : 'Non'

      return h(() => label)
    }
  }
]

async function fetchData() {
  try {
    const data = await $fetch<{ motorcycles: IMotorcycle[] }>(
      `${apiBack}motorcycles?project=model,year,is_public,withAllFiled`
    )

    if (data?.motorcycles) {
      motos.value = data.motorcycles.map((moto) => ({
        id: moto.id,
        brand: moto.brand?.marque || '',
        model: moto.model || '',
        year: moto.year || '',
        is_public: moto.is_public,
        published: moto.withAllFiled
      }))
    }
  } catch (err) {
    console.error('Erreur fetch motos:', err)
  }
}

onMounted(() => {
  fetchData()
})
</script>

<template>
  <div>
    <Header />
    <hr />

    <main>
      <div class="header-page">
        <UInput
          icon="i-lucide-search"
          size="md"
          variant="outline"
          placeholder="Rechercher une moto..."
          @click="showCardMoto = true"
        />

        <UButton size="md" color="primary">Ajouter une moto</UButton>
      </div>
      <CardMoto v-if="showCardMoto" />

      <div class="main-content">
        <h3>Liste des motos</h3>
        <UTable :data="motos" :columns="columns" />
      </div>
    </main>
  </div>
</template>

<style scoped>
.header-page {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 3rem;
}

.main-content {
  margin: 4em;
}
</style>
