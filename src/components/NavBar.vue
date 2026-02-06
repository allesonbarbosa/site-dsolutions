<template>
  <!-- NavBar -->
  <nav class="navbar navbar-expand-lg fixed-top">
    <div class="container-fluid">
      <img :src="logo" alt="logo-dsolutions" class="navbar-logo" />
      <h1 class="h3 text-white">DSolutions</h1>
      <div
        class="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Logo</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-center flex-grow-1 pe-3">
            <li class="nav-item">
              <a class="nav-link active mx-lg-2" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link mx-lg-2" href="#">Sobre</a>
            </li>
            <li class="nav-item">
              <a class="nav-link mx-lg-2" href="#">Serviços</a>
            </li>
            <li class="nav-item">
              <a class="nav-link mx-lg-2" href="#">Contato</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="dropdown me-3">
        <button
          class="btn dropdown-toggle d-flex align-items-center gap-1"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img :src="flagIcon" alt="flag-idioma" class="flag-idioma" />
        </button>
        <ul class="dropdown-menu dropdown-menu-end">
          <li><a class="dropdown-item" href="#">Português</a></li>
          <li><a class="dropdown-item" href="#">Inglês</a></li>
          <li><a class="dropdown-item" href="#">Espanhol</a></li>
        </ul>
      </div>
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
      <div class="hero-card d-flex flex-column align-items-center">
        <h1>Inteligência de dados aplicada ao comércio exterior</h1>
        <p class="text-center">
          A partir dos dados das operações de importação e exportação, a Dsolutionscom gera
          informação estratégica que orienta decisões mais eficientes e consistentes.
        </p>
        <button class="btn btn-primary">Fale conosco</button>
      </div>
    </div>
  </section>
  <!-- Hero section -->
</template>

<script>
import Flag from '../assets/br.svg';
import Logo from '../assets/logo2.png';

export default {
  name: 'NavBar',
  data() {
    return {
      flagIcon: Flag,
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
  padding: 0.5rem;
}

.navbar-toggler {
  border: none;
  font-size: 1.25rem;
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

.flag-idioma {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
}

.btn {
  border: none;
}

.navbar-logo {
  width: 100px;
  height: 80px;
  border-radius: 50%;
}
.dropdown-toggle::after {
  color: white;
}

.hero-card {
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.03));
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
  overflow: hidden;
  padding: 26px;
}
p {
  color: #a9b6d3;
  font-size: 25px;
}
</style>
