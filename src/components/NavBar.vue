<template>
  <!-- NavBar -->
  <nav class="navbar navbar-expand-lg fixed-top">
    <div class="container-fluid">
      <div class="logo-container d-flex align-items-center">
        <img :src="logo" alt="logo-dsolutions" class="navbar-logo" />
        <h1 class="h3 text-white">DSolutionscom</h1>
      </div>
      <div
        class="offcanvas text-bg-primary offcanvas-end"
        tabindex="-1"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div class="offcanvas-header">
          <button
            type="button"
            class="btn-close btn-close-white"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body w-75">
          <ul class="navbar-nav justify-content-center flex-grow-1 ps-5">
            <li class="nav-item">
              <a class="nav-link active mx-lg-2" aria-current="page" href="#">{{ $t('navbar.home') }}</a>
            </li>
            <li class="nav-item">
              <a class="nav-link mx-lg-2" href="#about">{{ $t('navbar.sobre') }}</a>
            </li>
            <li class="nav-item">
              <a class="nav-link mx-lg-2" href="#">{{ $t('navbar.solucoes') }}</a>
            </li>
            <li class="nav-item">
              <a class="nav-link mx-lg-2" href="#">{{ $t('navbar.contato') }}</a>
            </li>
          </ul>
        </div>
      </div>
      <IdiomaSelect />
      <button
        class="navbar-toggler pe-0"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
    </div>
  </nav>
  <section class="hero-section">
    <div
      class="container d-flex align-items-center justify-content-center fs-1 text-white flex-column"
    >
      <BaseCard class="d-flex align-items-center w-75">
        <h1 class="text-white text-center">{{ $t('heroCard.titulo') }}</h1>
        <p class="text-center text-light">{{ $t('heroCard.descricao') }}</p>
        <button class="btn btn-primary">Fale conosco</button></BaseCard
      >
      <div class="hero-card d-flex flex-column align-items-center"></div>
    </div>
  </section>
  <!-- Hero section -->
</template>

<script>
import Logo from '../assets/logo2.png';
import IdiomaSelect from './IdiomaSelect.vue';

export default {
  name: 'NavBar',
  components: { IdiomaSelect },
  data() {
    return {
      logo: Logo,
    };
  },
};
</script>

<style lang="css" scoped>
.navbar {
  background-color: #182230;
  height: 80px;
  margin: 20px;
  border-radius: 16px;
}

.navbar-toggler {
  border: none;
  font-size: 1.25rem;
  color: white;
}

.navbar-toggler:focus,
.btn-close:focus {
  box-shadow: none;
  outline: none;
}

.nav-link {
  color: #fff;
  font-weight: 500;
  position: relative;
}

.nav-link:hover,
.nav-link:active {
  color: #fff;
}

@media (min-width: 991px) {
  .nav-link::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 2px;
    background-color: #fff;
    visibility: hidden;
    transition: 0.3s ease-in-out;
  }
}

.nav-link.active {
  color: white;
}

.nav-link:hover::before,
.nav-link:active::before {
  width: 100%;
  visibility: visible;
}

.hero-section {
  background: url(../assets/eagle.jpeg) no-repeat center;
  background-size: cover;
  width: 100%;
  height: 100vh;
}

.hero-section::before {
  background-color: rgba(15, 23, 50, 0.9);
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.hero-section .container {
  height: 100vh;
  z-index: 1;
  position: relative;
}

.navbar-logo {
  width: 100px;
  height: 80px;
  border-radius: 50%;
}
</style>
