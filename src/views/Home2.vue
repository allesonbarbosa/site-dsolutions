<template>
  <div class="hero-container d-flex flex-column align-items-center p-3">
    <h1 class="hero-title">
      {{ $t('heroCard.titulo') }}
    </h1>
    <img class="hero-image" :src="Eagle" />
    <BaseCard class="hero-card text-center d-flex align-items-center">
      <p class="hero-text text-white">
        {{ $t('heroCard.descricao') }}
      </p>
      <a href="#contato" class="btn btn-secondary hero-btn">
        {{ $t('heroCard.faleConosco') }}
      </a>
    </BaseCard>
  </div>
</template>

<script>
import Eagle from '../assets/eagle2.jpeg';
export default {
  name: 'Home2',
  data() {
    return {
      Eagle: Eagle,
    };
  },
};
</script>

<style lang="scss" scoped>
.hero-image {
  height: auto;
  display: block;
}

.hero-container {
  background-color: #030001;
  padding: 5px 20px;
  height: 100vh;
}
.hero-title {
  text-transform: uppercase;
  color: white;
  text-align: center;
  background-color: #030001;
  margin: 0;
}

.hero-card {
  max-width: 950px;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  border: 2px solid rgba(0, 170, 255, 0.7);
  box-shadow:
    0 0 25px rgba(0, 170, 255, 0.6),
    inset 0 0 15px rgba(0, 170, 255, 0.3);

  color: #fff;
}
.hero-btn {
  padding: 0.75rem 1.5rem;
  font-weight: 600;
  width: 75%;
}

.hero-btn:hover {
  transform: scale(1.05);
}
</style>
