<template>
  <!-- NavBar -->
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <div class="logo-container d-flex align-items-center">
        <img :src="logo" alt="logo-dsolutions" class="navbar-logo" />
        <h3 class="text-white pt-2 logo-text">DSolutionscom</h3>
      </div>
      <div
        class="offcanvas text-bg-primary offcanvas-end"
        tabindex="-1"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
          <button
            type="button"
            class="btn-close btn-close-white"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body w-75">
          <ul class="navbar-nav justify-content-center flex-grow-1 ps-2">
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
      <div class="d-flex">
        <IdiomaSelect />
        <a
          class="navbar-toggler pe-0 d-flex align-items-center"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="burger"
        >
          <span class="navbar-toggler-icon"></span>
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
import Logo from '../assets/logo-blue.png';
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
  height: 70px;
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
  .navbar-toggler {
    display: none !important;
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

.navbar-logo {
  height: auto;
}
.navbar-toggler-icon {
  filter: invert(1);
}

.offcanvas {
  width: 300px;
}
</style>
