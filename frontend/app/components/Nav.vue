<script setup></script>

<template>
  <div class="container">
    <p class="logo">Motocenter</p>

    <div class="list">
      <p>Comparateur</p>
      <p>Forum</p>
      <p>Balades</p>
      <p>Nous connaitre</p>
      <p class="connexion">Connexion</p>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: white;

  padding: 10px;
}
.list {
  display: flex;
  flex-direction: row;
  gap: 40px;
}
p {
  align-self: center;
  font-family: 'Popins', sans-serif;
}
.logo {
  font-size: 1.2rem;
  font-weight: bold;

  background-color: #f00;
  color: white;

  border-radius: 5px;

  padding: 20px 40px;
  margin: 0;
}
.connexion {
  font-size: 1rem;
  font-weight: 600;

  color: white;
  background-color: black;

  border-radius: 40px;

  padding: 20px 50px;
  margin: 0;
}
</style>
