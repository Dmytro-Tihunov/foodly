<template lang="pug">
mixin howItWorks(title, description, step)
  div.howItWorks__item
    div.howItWorks__item__header
      h5.howItWorks__item__header-text= title
      span.howItWorks__item__header-step= step + " шаг"
    div.howItWorks__item__body
      p.howItWorks__item__body-text= description
    div.howItWorks__item__footer
      img(src="/src/assets/img/step_"+ step +".png" alt=description)

section.howItWorks
  h1.section__title Как это работает?

  div.howItWorks__row
    +howItWorks("Находите", "Введите артикул или название товара в поисковую строку", 1)
    +howItWorks("Проверяйте", "Мы проанализируем состав на наличие добавок и выделим их", 2)
    +howItWorks("Изучайте", "Узнайте подробную информацию о каждой добавке, которую мы нашли в составе", 3)
</template>