<template>
  <section class="hero-section" id="home">
    <div
      class="container d-flex align-items-center justify-content-center fs-1 text-white flex-column"
    >
      <BaseCard class="d-flex align-items-center w-75 p-3">
        <h1 class="text-white text-center">{{ $t('heroCard.titulo') }}</h1>
        <p class="text-center text-light fs-4">{{ $t('heroCard.descricao') }}</p>
        <a href="#contato" class="btn btn-primary btn-lg">
          {{ $t('heroCard.faleConosco') }}
        </a>
      </BaseCard>
      <div class="hero-card d-flex flex-column align-items-center"></div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HomeView',
};
</script>

<style lang="scss" scoped>
.btn:hover {
  transform: scale(1.1);
  transition: transform 0.2s ease-in-out;
}

.hero-section {
  background: url(../assets/eagle.jpeg) no-repeat center;
  background-size: cover;
  width: 100%;
  height: calc(100vh - 70px);
}

.hero-section::before {
  background-color: rgba(15, 23, 50, 0.9);
  content: '';
  position: absolute;
  top: 70px;
  right: 0;
  bottom: 0;
  left: 0;
}

.hero-section .container {
  height: calc(100vh - 70px);
  z-index: 1;
  position: relative;
}
</style>
