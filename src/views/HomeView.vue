<template>
  <div class="hero-container d-flex flex-column align-items-center p-3">
    <h1 class="hero-title text-center">
      {{ $t('heroCard.titulo') }}
    </h1>
    <div class="hero-image d-flex align-items-center justify-content-center">
      <img :src="Eagle" alt="hero-imagem" />
    </div>
    <BaseCard class="hero-card">
      <p class="hero-text text-white text-center">
        {{ $t('heroCard.descricao') }}
      </p>
      <a href="#contato" class="btn btn-secondary hero-btn">
        {{ $t('heroCard.faleConosco') }}
      </a>
    </BaseCard>
  </div>
</template>

<script>
import Eagle from '../assets/eagle.jpeg';
export default {
  name: 'HomeView',
  data() {
    return {
      Eagle: Eagle,
    };
  },
};
</script>

<style lang="scss" scoped>
.hero-container {
  background-color: #030001;
  height: calc(90vh - 70px);
}

.hero-title,
.hero-card {
  flex: 0 0 auto;
}

.hero-image {
  flex: 1 1 auto;
  overflow: hidden;
}
.hero-title {
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  color: #ffffff;
  text-transform: uppercase;
  background: linear-gradient(180deg, #ffffff 0%, #7dd3fc 40%, #00aaff 100%);

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  text-shadow:
    0 0 15px rgba(0, 170, 255, 0.35),
    0 0 30px rgba(0, 170, 255, 0.2);

  letter-spacing: 2px;
  margin-bottom: 1.5rem;
}

.hero-title::after {
  content: '';
  display: block;
  width: 85vw;
  height: 3px;
  margin: 0.75rem auto 0;

  background: linear-gradient(90deg, transparent, #00aaff, transparent);

  box-shadow: 0 0 15px rgba(0, 170, 255, 0.9);
}

.hero-image img {
  max-height: 100%;
  max-width: 100%;
  object-fit: contain;
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
  margin: auto;
}

.hero-btn:hover {
  transform: scale(1.05);
}
</style>
