<template>
  <section id="footer" class="bg-primary px-5">
    <div class="d-flex justify-content-between border-top border-light py-5">
      <div class="d-flex flex-column">
        <img class="footer-logo" :src="logo" alt="imagem-logo" />
        <h1 class="text-white fs-2 ms-2 m-0">DSolutionscom</h1>
        <p class="text-white fs-5 ms-2 m-0">{{ $t('heroCard.titulo') }}</p>
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
    <p class="text-white text-center m-0 fs-6">
      {{ $t('footer.direitos', { ano: getAno }) }}
    </p>
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
  width: 130px;
  height: auto;
}
</style>
