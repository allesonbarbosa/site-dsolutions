<template>
  <section
    class="vh-100 d-flex flex-column justify-content-start align-items-center mt-3 gap-2 px-5"
    id="about"
  >
    <div class="text-center">
      <h1 class="text-primary">{{ $t('aboutCard.quemSomos.titulo') }}</h1>
      <p class="fs-5 text-body-secondary">{{ $t('aboutCard.quemSomos.descricao') }}</p>
    </div>
    <div class="row w-100">
      <div v-for="(item, index) in cardItems" :key="index" class="col-lg-6 mb-3">
        <BaseCard class="d-flex align-items-center text-center h-100">
          <div class="icon-card">
            <img :src="getIcon(item.logo)" alt="logo-card" />
          </div>
          <h5 class="text-primary">{{ $t(`aboutCard.${item.title}.titulo`) }}</h5>
          <p class="text-body-secondary">{{ $t(`aboutCard.${item.title}.descricao`) }}</p>
        </BaseCard>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutView',
  data() {
    return {
      cardItems: [
        {
          title: 'nossaAtuacao',
          logo: 'world',
        },
        {
          title: 'inteligenciaDados',
          logo: 'intelligence',
        },
        {
          title: 'nossoPosicionamento',
          logo: 'positioning',
        },
        {
          title: 'visao',
          logo: 'target',
        },
      ],
    };
  },
  computed: {
    iconsSvg() {
      return import.meta.glob('../assets/icons/*', { eager: true, import: 'default' });
    },
  },
  methods: {
    getIcon(name) {
      return this.iconsSvg[`../assets/icons/${name}.svg`];
    },
  },
};
</script>

<style lang="scss" scoped>
.icon-card > img {
  filter: invert(1);
  padding: 1rem;
  width: 90px;
}

.icon-card {
  background-color: var(--bs-primary);
  border-radius: 50%;
  width: 90px;
  margin-bottom: 1rem;
}

p {
  font-size: 15px;
}
</style>
