<template lang="pug">
section.product
  div.product__main
    div.product__block.product__block-main
      h5.product__block-main__title Молоко 1,5% ультрапастеризованное 970 мл Простоквашино безлактозное
      div.product__block-main__img
        img(src="/src/assets/img/product.jpg" alt="Молоко 1,5% ультрапастеризованное 970 мл Простоквашино безлактозное")
      div.product__block-main__rows
        div.product__block-main__rows-item
          div.product__block-main__rows-item__name Штрихкод
          div.product__block-main__rows-item__value 46033872786287
        div.product__block-main__rows-item
          div.product__block-main__rows-item__name Страна
          div.product__block-main__rows-item__value Россия
      div.product__block-main__rating
        img(src="/src/assets/img/rating.svg" alt="")
        div.product__block-main__rating-value 4,9
    div.product__block.product__block-perishable Данный продукт относится к категории скоропортящихся, поэтому уделяйте особое внимание сроку годности!
  div.product__analysis
    div.product__block.product__block-analysis
      div.product__block__header
        h5.product__block__header-text Состав
      div.product__block__body
        p.product__block__body-text Молоко пастеризованное, <span data-level="3">E282</span>, закваска (термофильный молочнокислый стрептококк, болгарская палочка), <span data-level="2">E282</span>, вода, <span data-level="1">E282</span>
    div.product__block.product__block-analysis.product__block-allergens
      div.product__block__header
        h5.product__block__header-text Аллергены
      div.product__block__body
        div.product__block__body__allergens
          div.product__block__body__allergens-item
            div.product__block__body__allergens-item__name Глютен
            div.product__block__body__allergens-item__value не содержится
          div.product__block__body__allergens-item
            div.product__block__body__allergens-item__name Лактоза
            div.product__block__body__allergens-item__value возможно
          div.product__block__body__allergens-item
            div.product__block__body__allergens-item__name Орехи
            div.product__block__body__allergens-item__value содержится
    div.product__block.product__block-analysis.product__block-profiles
      div.product__block__header
        h5.product__block__header-text Профили
        span.product__block__header-additional Только в приложении
      div.product__block__body.product__block__body-profiles
        div.product__block__body-profiles__img
          img(src="/src/assets/img/profiles_lock.svg" alt="Профили доступны только в приложении")
        p.product__block__body-profiles__text Профили позволяют выбирать продукты, подходящие нескольким людям, учитывая их непереносимость и аллергии
    div.product__block.product__block-analysis.product__block-bug
      div.product__block__header
        h5.product__block__header-text Нашли ошибку?
      div.product__block__body.product__block__body-bug
        p.product__block__body-bug__text Мы стараемся сделать наш сервис максимально полезным и стараемся следить за достоверностью предоставляемой информации, поэтому в случае расхождения состава или при ошибке определения наличия аллергенов, обязательно сообщите нам
        <router-link class="btn btn-white" :to="{name: 'contacts'}">Сообщить об ошибке</router-link>

</template>