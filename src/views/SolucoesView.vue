<template>
  <section
    class="d-flex flex-column justify-content-start align-items-center mt-3 gap-2 px-5"
    id="solucoes"
  >
    <div class="text-center">
      <h1 class="text-primary">{{ $t('solucoesCard.titulo') }}</h1>
      <p class="fs-5 text-body-secondary">{{ $t('solucoesCard.descricao') }}</p>
    </div>
    <div class="row w-100">
      <div v-for="(item, index) in cardItems" :key="index" class="col-lg-4 mb-3">
        <BaseCard class="d-flex align-items-center text-center h-100">
          <div class="image-card mb-2">
            <img :src="getIcon(item.logo)" alt="logo-card" />
          </div>
          <h5 class="text-primary px-3">{{ $t(`solucoesCard.${item.title}.titulo`) }}</h5>
          <p class="text-body-secondary px-3">{{ $t(`solucoesCard.${item.title}.descricao`) }}</p>
        </BaseCard>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SolucoesView',
  data() {
    return {
      cardItems: [
        {
          title: 'analiseOperacional',
          logo: 'business',
        },
        {
          title: 'businessIntelligence',
          logo: 'analysis',
        },
        {
          title: 'acompanhamento',
          logo: 'support',
        },
      ],
    };
  },
  computed: {
    iconsSvg() {
      return import.meta.glob('../assets/*', { eager: true, import: 'default' });
    },
  },
  methods: {
    getIcon(name) {
      return this.iconsSvg[`../assets/${name}.jpeg`];
    },
  },
};
</script>

<style lang="scss" scoped>
.image-card {
  height: 220px;
  width: 100%;
  overflow: hidden;
}

@media (min-width: 991px) {
  .image-card img {
    width: 100%;
    height: 100%;
    object-fit: fill;
  }
}

.image-card img {
  width: 100%;
  height: 100%;
}

p {
  font-size: 15px;
}
</style>
