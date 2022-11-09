<template lang="pug">
mixin whatKnowsItem(title, value, icon)
  div.whatKnows__item
    div.whatKnows__item-icon
      img(src="/src/assets/img/" + icon alt=value + ": " + value)
    div.whatKnows__item-text
      div.whatKnows__item-title= title
      div.whatKnows__item-value= value

section.whatKnows
  h1.section__title О чём знает Foodly?

  div.whatKnows__items
    +whatKnowsItem('Сохранено составов', 'Более 6000', 'saved_composition.svg')
    +whatKnowsItem('Проверяемых добавок', '184 шт.', 'checking_supplements.svg')
    +whatKnowsItem('Проверяемых аллергенов', '12 шт.', 'checking_allergens.svg')

</template>