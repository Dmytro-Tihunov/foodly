<template lang="pug">
mixin footerItem(title, ...links)
  div.footer__links__item
    p.footer__links__item-title= title
    ul.footer__links__menu
      each link in links
        li.footer__links__menu-item
          a(href="#")=link

footer.footer
  div.container
    div.footer__links
      +footerItem('Документация', 'Пользовательское соглашение', 'Политика конфиденциальности', 'Согласие на обработку перс. данных')
      +footerItem('Социальные сети', 'Telegram', 'Instagram', 'VKontakte')
      +footerItem('Поддержка', 'Вопросы и ответы', 'help@foodly.org', '8 (800) 000-00-00')
    div.footer__copyright © 2022, Foodly.org, официальный сайт
</template>
<script>
export default {
  watch:{
    $route (to, from){
      if( to.path === "/product" ){
        document.querySelector(".footer").classList.add("footer-filled")
      } else {
        document.querySelector(".footer").classList.remove("footer-filled")
      }
    }
  },
}
</script>