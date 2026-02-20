<template>
  <section class="hero-section d-flex align-items-center" id="home">
    <div class="container d-flex justify-content-center">
      <BaseCard class="hero-card text-center">
        <h1 class="hero-title">
          {{ $t('heroCard.titulo') }}
        </h1>

        <p class="hero-text">
          {{ $t('heroCard.descricao') }}
        </p>

        <a href="#contato" class="btn btn-secondary hero-btn">
          {{ $t('heroCard.faleConosco') }}
        </a>
      </BaseCard>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HomeView',
};
</script>

<style lang="scss" scoped>
.hero-section {
  position: relative;
  background: url(../assets/eagle.jpeg) no-repeat center;
  background-size: cover;
  width: 100%;
  height: calc(100vh - 70px);
  overflow: hidden;
}

.hero-section::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at center, rgba(20, 40, 90, 0.55), rgba(5, 10, 30, 0.45));
  z-index: 0;
}

.hero-section .container {
  position: relative;
  z-index: 1;
  height: calc(100vh - 70px);
  display: flex;
  align-items: center;
  padding-bottom: 40px;
}

.hero-card {
  max-width: 720px;
  padding: 1.5rem 2rem;
  border-radius: 20px;

  background: rgba(10, 20, 40, 0.05);
  backdrop-filter: blur(2px);

  border: 2px solid rgba(0, 170, 255, 0.7);
  box-shadow:
    0 0 25px rgba(0, 170, 255, 0.6),
    inset 0 0 15px rgba(0, 170, 255, 0.3);

  color: #fff;
}

.hero-title {
  text-transform: uppercase;
}
.hero-btn {
  padding: 0.75rem 2.2rem;
  font-weight: 600;
}

.hero-btn:hover {
  transform: scale(1.05);
}
</style>
