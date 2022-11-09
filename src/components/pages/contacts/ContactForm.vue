<template lang="pug">
div.contacts__block
  div.product__block__header
    h5.product__block__header-text Контактная форма
  div.product__block__body
    form
      input(type="text" placeholder="Ваше имя" name="name")
      input(type="email" placeholder="Ваше E-mail для получения ответа" name="email")
      input(type="text" placeholder="Тема обращения" name="subject")
      textarea(rows="5" name="body" placeholder="Текст обращения")
      button(type="submit").btn.btn-primary Отправить обращение
</template>