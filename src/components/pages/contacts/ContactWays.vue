<template lang="pug">
mixin contactWay(title, value, icon)
  div.contact__way
    div.contact__way__icon
      img(src="/src/assets/img/contacts/" + icon alt=title)
    div.contact__way__text
      span.contact__way__text__title= title
      a(href="#").contact__way__text__value= value

div.contacts__block
  div.product__block__header
    h5.product__block__header-text Другие способы связи
  div.product__block__body
    div.contact__ways
      +contactWay('Наш E-mail', 'help@foodly.org', 'email_icon.svg')
      +contactWay('Горячая линия', '8 (800) 000-00-00', 'phone_icon.svg')
      +contactWay('Мы в Telegram', '@foodly', 'telegram_icon.svg')
      +contactWay('Мы в Instagram', '@foodly', 'instagram_icon.svg')
      +contactWay('Мы ВКонтакте', '@foodly', 'vk_icon.svg')
</template>