<template>
  <section id="footer" class="bg-primary px-md-5 px-3">
    <div class="row d-flex justify-content-center border-top border-light py-5">
      <div
        class="d-flex flex-column align-items-center align-items-sm-start text-center text-sm-start col-sm-6 mb-4"
      >
        <img class="footer-logo" :src="logo" alt="imagem-logo" />
        <h5 class="text-white ms-2 m-0">DSolutionscom</h5>
        <span class="text-white ms-2 m-0">{{ $t('heroCard.titulo') }}</span>
      </div>
      <div class="pe-3 col-sm-3 text-center text-sm-start mb-4">
        <h6 class="text-white">{{ $t('footer.contatos') }}</h6>
        <ul class="navbar-nav justify-content-center flex-grow-1 text-white">
          <li>{{ $t('footer.telefone') }} {{ contactPhone }}</li>
          <li>{{ $t('footer.email') }} {{ contactEmail }}</li>
        </ul>
      </div>
      <div class="pe-3 col-sm-3 text-center text-sm-start">
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
    contactEmail() {
      return import.meta.env.VITE_CONTACT_EMAIL;
    },
    contactPhone() {
      let number = import.meta.env.VITE_WHATSAPP_NUMBER;
      const phone = number.slice(2).replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
      return phone;
    },
  },
};
</script>

<style lang="scss" scoped>
.footer-logo {
  height: auto;
}
</style>
