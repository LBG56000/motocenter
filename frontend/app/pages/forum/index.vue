<script setup lang="ts">
import ForumPost from '~/components/ForumPost.vue';
import type { IBrand } from '~/types/brand';
import type { ICategory } from '~/types/category';
import type { IPost } from '~/types/post';

const posts = ref<IPost[]>([])
const categories = ref<ICategory[]>([])
const brands = ref<IBrand[]>([])

const onlyMyPosts = ref(true)
const loading = ref(true)
const getPosts = async () => {
  const res = await fetch(`${useRuntimeConfig().public.apiBase}posts?deep=true&project=content,question,id,createdAt,views`)
  const data = await res.json()
  posts.value = await Promise.all(
    data.posts.map(async (post: IPost) => {
      post.responses = await getResponseOfPost(post.id)
      return post
    })
  )
}

const getResponseOfPost = async (postId: string) => {
  const res = await fetch(`${useRuntimeConfig().public.apiBase}posts/${postId}/responses`)
  const data = await res.json()
  return data.messages
}

const getCategories = async () => {
  const res = await fetch(`${useRuntimeConfig().public.apiBase}categories?project=name,id,icon`)
  const data = await res.json()
  categories.value = data.categories
}

const getBrands = async () => {
  const res = await fetch(`${useRuntimeConfig().public.apiBase}brand?project=name,id,icon`)
  const data = await res.json()
  brands.value = data.brands
}

const handleHaveAllPosts = () => {
  console.log('clic on all ')
}

const handleHaveMyFavorites = () => {
  console.log('Myfavorite')
}

const handlClickOnCategory = (id: string) => {
  console.log('Click on category ' + id)
}

const handlClickBrand = (id: string) => {
  console.log('Click on brand' + id)
}

const isUserOfPost = computed(() => {
  return true
})

const handleOpenAPost = (id: string) => {
  navigateTo(`/forum/${id}?isUserOfPost=${isUserOfPost.value}`)
}

onMounted(async () => {
  await Promise.all([
    getCategories(), getPosts(), getBrands()
  ])
  loading.value = false
})
</script>

<template>
  <div>
    <div>
      <!-- <NavApp></NavApp> -->
    </div>
    <p v-if="loading">fdlgknfmkgfdgn</p>
    <div v-else class="forum-filters">
      <div class="filters">
        <UCard>
          <div class="icon-and-text filter cursor-pointer" @click="handleHaveAllPosts">
            <UIcon class="size-7 margin-2" name="i-lucide-messages-square" />
            <p>Tous les posts</p>
          </div>
          <div class="icon-and-text filter cursor-pointer" @click="handleHaveMyFavorites">
            <UIcon class="size-7 margin-2" name="i-lucide-star" />
            <p>Mes favoris</p>
          </div>
          <div class="filter">
            <div class="icon-and-text">
              <UIcon class="size-7 margin-2" name="i-lucide-grid-2x2-check" />
              <p>Catégories</p>
            </div>
            <div class="categories-filters">
              <div v-for="category in categories" :key="category.id" class="icon-and-text sub-filter cursor-pointer"
                @click="handlClickOnCategory(category.id)">
                <UIcon class="size-7 margin-2" :name="'i-lucide-' + category.icon" />
                <p>{{ category.name }}</p>
              </div>
            </div>
          </div>
          <div class="filter">
            <div class="icon-and-text">
              <UIcon class="size-7 margin-2" name="i-lucide-warehouse" />
              <p>Marques</p>
            </div>
            <div class="brands-filters">
              <div v-for="brand in brands" :key="brand.id" class="icon-and-text sub-filter cursor-pointer"
                @click="handlClickBrand(brand.id)">
                <img :src="brand.icon" alt="" width="40" height="40">
                <p>{{ brand.name }}</p>
              </div>
            </div>
          </div>
          <USwitch v-model="onlyMyPosts" label="Uniquement mes posts" class="filter" />
        </UCard>
      </div>
      <div>
        <div v-for="post in posts" :key="post.id">
          <ForumPost :post="post" :is-user="isUserOfPost" class="cursor-pointer" @click="handleOpenAPost(post.id)" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.forum-filters {
  display: flex;
  flex-direction: row;
  margin: 5em;
}

.icon-and-text {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.categories-filters {
  margin-right: 1em;
}

.filter {
  margin: 2em;
}

.filters {
  margin-right: 2em;
}

.sub-filter {
  margin: 1em;
}

.cursor-pointer {
  cursor: pointer;
}
</style>