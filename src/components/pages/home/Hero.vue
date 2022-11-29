<template>
  <section class="hero">
    <div class="hero__text">
      <h1 class="hero__text-title">Начните выбирать полезные<br>продукты на полках магазина</h1>
      <p class="hero__text-info">Foodly помогает найти хорошие по составу продукты,<br>а также предоставляет список аллергенов всего лишь по штрихкоду</p>
      <form class="hero__text-form hero__search">
        <label for="query-field">
          <img alt="" src="/src/assets/img/search.svg">
        </label>
        <input class="form__input" id="query-field" placeholder="Введите штрихкод или название товара">
        <button class="btn btn-primary" type="submit">Поиск</button>
      </form>
    </div>
    <div class="hero__image"><img src="/src/assets/img/hero.jpg" alt=""></div>
  </section>
</template>