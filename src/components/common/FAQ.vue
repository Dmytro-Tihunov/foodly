<template lang="pug">
mixin faqItem(question, answer)
  div.faq__list-item
    h5.faq__list-item__question= question
    p.faq__list-item__answer= answer

section.faq
  div.faq__block
    h1.section__title Подготовили для Вас ответы<br>на популярные вопросы
    div.faq__list
      +faqItem('Для чего это нужно?', 'Foodly – это сервис, который предоставляет каждому без лишних трудностей узнать, какие добавки в составе продукта являются вредными и почему.')
      +faqItem('Откуда у вас составы продуктов?', 'Foodly – это сервис, который предоставляет каждому без лишних трудностей узнать, какие добавки в составе продукта являются вредными и почему.')
      +faqItem('На какие аллергены выполняется проверка?', 'Foodly – это сервис, который предоставляет каждому без лишних трудностей узнать, какие добавки в составе продукта являются вредными и почему.')
      +faqItem('Где я могу узнать полный список добавок?', 'Foodly – это сервис, который предоставляет каждому без лишних трудностей узнать, какие добавки в составе продукта являются вредными и почему.')
    <router-link class="btn btn-secondary" :to="{name: 'contacts'}">Я не нашёл (-ла) ответ на свой вопрос</router-link>
</template>
<script>
export default {
  mounted() {
    document.querySelectorAll(".faq__list .faq__list-item__question").forEach((item) => {
      item.addEventListener("click", () => {
        item.closest(".faq__list .faq__list-item").classList.toggle("faq__list-item-open")
      });
    });
  },
}
</script>