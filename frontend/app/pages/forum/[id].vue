<script setup lang="ts">
import type { IMessage } from '~/types/message'
import type { IPost } from '~/types/post'

const route = useRoute()

const post = ref<IPost>()
const responses = ref<IMessage[]>([])

const newReponseOfPost = ref('')

const getPost = async () => {
  const res = await fetch(`${useRuntimeConfig().public.apiBase}posts/${route.params.id}?deep=true`)
  const data = await res.json()
  post.value = data.post
}

const getResponsesOfPost = async () => {
  const res = await fetch(`${useRuntimeConfig().public.apiBase}posts/${route.params.id}/responses`)
  const data = await res.json()
  responses.value = data.messages
}

onMounted(async () => {
  await Promise.all([
    getPost(),
    getResponsesOfPost()
  ])
})

</script>

<template>
  <div>
    <div>
      <h2>{{ post?.question }}</h2>
    </div>
    <div>
      <div>
        <UBadge size="lg">{{ post?.brand.name }}</UBadge>
        <UBadge size="lg">{{ post?.category.name }}</UBadge>
      </div>
      <div>
        <UIcon class="size-7" name="i-lucide-messages-square" />
        <p>{{ responses.length || 0 }} réponses </p>
      </div>
    </div>
    <div>
      <p>Par {{ post?.user.firstname }}, {{ formatTimeAgo(post?.createdAt)
        }}</p>
      <div>
        <UIcon class="size-7" name="i-lucide-eye" />
        <p>{{ post?.views }} vues</p>
      </div>
    </div>
    <img :src="post?.image" :alt="`Image du post ${post?.question} par ${post?.user.firstname}`"
      :title="`Image du post ${post?.question} par ${post?.user.firstname}`">
    <p>{{ post?.content }}</p>
    <div>
      <UIcon name="i-lucide-star" class="size-7" />
      <p>Mettre ma réponse en favori</p>
    </div>
    <UFormField label="Ecrire une réponse" required>
      <UTextarea v-model="newReponseOfPost" />
    </UFormField>
  </div>
</template>

<style scoped></style>