<template>
  <section class="d-flex align-items-center hero-section" id="home">
    <div
      class="container d-flex align-items-center justify-content-center fs-1 text-white flex-column"
    >
      <BaseCard class="d-flex align-items-center hero-card p-3">
        <h1 class="text-white text-center">{{ $t('heroCard.titulo') }}</h1>
        <p class="text-center text-light">{{ $t('heroCard.descricao') }}</p>
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
  height: 100vh;
  background-color: rgba(15, 23, 50, 0.96);
}
</style>
