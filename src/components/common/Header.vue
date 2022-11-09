<template lang="pug">
header.header
  div.header__logo
    <router-link :to="{name: 'home'}">
    img(src="/src/assets/img/logo.svg" alt="logo")
    </router-link>
  ul.header__menu
    li.header__menu-item
      <router-link :to="{name: 'home'}">Главная</router-link>
    li.header__menu-item
      <router-link :to="{name: 'about'}">О сервисе</router-link>
    li.header__menu-item
      <router-link :to="{name: 'contacts'}">Контакты</router-link>
    li.header__menu-item
      <router-link class="btn btn-primary" :to="{name: 'app'}">Скачать приложение</router-link>
</template>