<template>
  <section class="product">
    <div class="product__main">
      <div class="product__block product__block-main">
        <h5 class="product__block-main__title">Молоко 1,5% ультрапастеризованное 970 мл Простоквашино безлактозное</h5>
        <div class="product__block-main__img">
          <img src="/src/assets/img/product.jpg" alt="Молоко 1,5% ультрапастеризованное 970 мл Простоквашино безлактозное" />
        </div>
        <div class="product__block-main__rows">
          <div class="product__block-main__rows-item">
            <div class="product__block-main__rows-item__name">Штрихкод</div>
            <div class="product__block-main__rows-item__value">46033872786287</div>
          </div>
          <div class="product__block-main__rows-item">
            <div class="product__block-main__rows-item__name">Страна</div>
            <div class="product__block-main__rows-item__value">Россия</div>
          </div>
        </div>
        <div class="product__block-main__rating">
          <img src="/src/assets/img/rating.svg" alt="" />
          <div class="product__block-main__rating-value">4,9</div>
        </div>
      </div>
      <div class="product__block product__block-perishable">Данный продукт относится к категории скоропортящихся, поэтому уделяйте особое внимание сроку годности!
      </div>
    </div>
    <div class="product__analysis">
      <div class="product__block product__block-analysis">
        <div class="product__block__header">
          <h5 class="product__block__header-text">Состав</h5>
        </div>
        <div class="product__block__body">
          <p class="product__block__body-text">Молоко пастеризованное, <span data-level="3">E282</span>,
            закваска (термофильный молочнокислый стрептококк, болгарская палочка),
            <span data-level="2">E282</span>, вода, <span data-level="1">E282</span>
          </p>
        </div>
      </div>
      <div class="product__block product__block-analysis product__block-allergens">
        <div class="product__block__header">
          <h5 class="product__block__header-text">Аллергены</h5>
        </div>
        <div class="product__block__body">
          <div class="product__block__body__allergens">
            <div class="product__block__body__allergens-item">
              <div class="product__block__body__allergens-item__name">Глютен</div>
              <div class="product__block__body__allergens-item__value">не содержится</div>
            </div>
            <div class="product__block__body__allergens-item">
              <div class="product__block__body__allergens-item__name">Лактоза</div>
              <div class="product__block__body__allergens-item__value">возможно</div>
            </div>
            <div class="product__block__body__allergens-item">
              <div class="product__block__body__allergens-item__name">Орехи</div>
              <div class="product__block__body__allergens-item__value">содержится</div>
            </div>
          </div>
        </div>
      </div>
      <div class="product__block product__block-analysis product__block-profiles">
        <div class="product__block__header">
          <h5 class="product__block__header-text">Профили</h5>
          <span class="product__block__header-additional">Только в приложении</span>
        </div>
        <div class="product__block__body product__block__body-profiles">
          <div class="product__block__body-profiles__img">
            <img src="/src/assets/img/profiles_lock.svg" alt="Профили доступны только в приложении" />
          </div>
          <p class="product__block__body-profiles__text">Профили позволяют выбирать продукты, подходящие нескольким
            людям, учитывая их непереносимость и аллергии</p>
        </div>
      </div>
      <div class="product__block product__block-analysis product__block-bug">
        <div class="product__block__header">
          <h5 class="product__block__header-text">Нашли ошибку?</h5>
        </div>
        <div class="product__block__body product__block__body-bug">
          <p class="product__block__body-bug__text">Мы
          стараемся сделать наш сервис максимально полезным и стараемся следить за достоверностью предоставляемой
          информации, поэтому в случае расхождения состава или при ошибке определения наличия аллергенов, обязательно
          сообщите нам</p>
          <router-link class="btn btn-white" :to="{name: 'contacts'}">Сообщить об ошибке</router-link>
        </div>
      </div>
    </div>
  </section>
</template>