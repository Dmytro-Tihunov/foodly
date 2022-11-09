<template lang="pug">
section.hero
  div.hero__text
    h1.hero__text-title Начните выбирать полезные<br>продукты на полках магазина
    p.hero__text-info Foodly помогает найти хорошие по составу продукты,<br>а также предоставляет список аллергенов всего лишь по штрихкоду
    form.hero__text-form.hero__search
      label(for="query-field")
        img(alt="" src="/src/assets/img/search.svg")
      input.form__input(id="query-field" placeholder="Введите штрихкод или название товара")
      button.btn.btn-primary(type="submit") Поиск
  div.hero__image
    img(src="/src/assets/img/hero.jpg" alt="")
</template>