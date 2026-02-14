<template>
  <section id="footer" class="bg-primary px-md-5 px-3">
    <div class="d-flex justify-content-between border-top border-light py-5">
      <div class="d-flex flex-column">
        <img class="footer-logo" :src="logo" alt="imagem-logo" />
        <h5 class="text-white ms-2 m-0">DSolutionscom</h5>
        <span class="text-white ms-2 m-0">{{ $t('heroCard.titulo') }}</span>
      </div>
      <div class="pe-3">
        <h6 class="text-white">{{ $t('footer.mapaSite') }}</h6>
        <ul class="navbar-nav justify-content-center flex-grow-1 text-white">
          <li class="nav-item">
            <a class="nav-link active mx-lg-2" aria-current="page" href="#">{{
              $t('navbar.home')
            }}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link mx-lg-2" href="#about">{{ $t('navbar.sobre') }}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link mx-lg-2" href="#solucoes">{{ $t('navbar.solucoes') }}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link mx-lg-2" href="#contato">{{ $t('navbar.contato') }}</a>
          </li>
        </ul>
      </div>
    </div>
    <span class="text-white m-0 d-flex justify-content-center">
      {{ $t('footer.direitos', { ano: getAno }) }}
    </span>
  </section>
</template>

<script>
import Logo from '../assets/logo-blue.png';
export default {
  name: 'FooterView',
  data() {
    return {
      logo: Logo,
    };
  },
  computed: {
    getAno() {
      return new Date().getFullYear();
    },
  },
};
</script>

<style lang="scss" scoped>
.footer-logo {
  height: auto;
}
</style>
