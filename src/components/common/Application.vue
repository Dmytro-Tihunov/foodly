<template lang="pug">
section.hero.hero-application
  div.hero__text
    h1.hero__text-title Foodly в Вашем кармане
    p.hero__text-info Мы подготовили мобильные приложения, которые вмещают в себя не только весь функционал веб-сервиса, но и имеют дополнительные преимущества
    div.hero-application__download
      div.hero-application__download-links
        a(href="#")
          img(src="/src/assets/img/app_store.svg" alt="Google Play Store")
        a(href="#")
          img(src="/src/assets/img/google_play.svg" alt="App Store")
      div.hero-application__download-qr
        img(src="/src/assets/img/qr_code.png" alt="QR-код для скачивания приложений")

  div.hero__image
    img(src="/src/assets/img/app.jpg" alt="")
</template>