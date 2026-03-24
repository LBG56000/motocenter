<script setup lang="ts">
import type { IPost } from '~/types/post';

const props = defineProps<{
  post: IPost,
  isUser: boolean
}>()

const handleEditFilter = () => {
  console.log('Edit post')
}

const handleOpenAPost = (id: string) => {
  navigateTo(`/forum/${id}`)
}

onMounted(async () => {
  await props.post
})
</script>
<template>
  <UCard class="postCard" @click="handleOpenAPost(post.id)">
    <div class="header">
      <div class="icon-and-question">
        <UAvatar :src="`/_nuxt/assets/images/users/${props.post.user.image}`" size="3xl" loading="lazy"
          class="margin-2" />
        <h4 class="margin-bottom-1_5">{{ props.post.question }}</h4>
      </div>
      <UIcon v-if="props.isUser" class="size-6" name="i-lucide-square-pen" @click.stop="handleEditFilter" />
    </div>
    <div class="card-forum">
      <div class="content">
        <div class="grid margin-top-1_5">
          <div class="mark-and-category">
            <UBadge size="lg" class="margin-2">{{ props.post.brand.name }}</UBadge>
            <UBadge size="lg">{{ props.post.category.name }}</UBadge>
          </div>
          <div class="icon-and-text right">
            <UIcon class="size-7 margin-2" name="i-lucide-messages-square" />
            <p>{{ props.post.responses.length || 0 }} réponses</p>
          </div>
          <p>Par {{ props.post.user.firstname }}, {{ formatTimeAgo(props.post.createdAt)
            }}</p>
          <div class="icon-and-text right">
            <UIcon class="size-7 margin-2" name="i-lucide-eye" />
            <p>{{ props.post.views }} vues</p>
          </div>
        </div>
      </div>
    </div>
  </UCard>
</template>
<style scoped>
.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
}

.icon-and-question {
  display: flex;
  align-items: flex-start;
  gap: 0.5em;
}

.icon-and-question h4 {
  margin-top: 0;
}

.postCard {
  width: 55vw;
  margin: 1em auto;
  padding: 1em;
}

.margin-2 {
  margin-right: 0.5em;
}

.icon-and-text {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.card-forum {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
}

.img {
  border-radius: 10em;
  margin-right: 0.5em;
}

.title {
  align-items: center;
}

.title>h4 {
  margin-right: 2em;
}

.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 0.5em;
}

.right {
  justify-self: end;
}

.content {
  width: 100%;
}

.margin-top-1_5 {
  margin-top: 1.5em;
}

.margin-bottom-1_5 {
  margin-bottom: 0.5em;
}
</style>