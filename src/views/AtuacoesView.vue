<template>
  <section
    class="d-flex flex-column justify-content-start align-items-center gap-2"
    id="about"
  >
    <div class="text-center">
      <h1 class="text-primary">{{ $t('atuacoesCard.titulo') }}</h1>
    </div>
    <div class="row w-100">
      <div v-for="(item, index) in cardItems" :key="index" class="col-lg-6 mb-3">
        <div class="d-flex">
          <div class="icon-card d-flex">
            <img :src="getIcon(item.logo)" alt="logo-card" />
          </div>
          <div class="py-3 px-2">
            <h5 class="text-primary border-bottom border-primary border-4 pb-3">
              {{ $t(`atuacoesCard.${item.title}.titulo`) }}
            </h5>
            <span class="text-body-secondary">{{ $t(`atuacoesCard.${item.title}.descricao`) }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AtuacoesView',
  data() {
    return {
      cardItems: [
        {
          title: 'item1',
          logo: 'one',
        },
        {
          title: 'item2',
          logo: 'two',
        },
        {
          title: 'item3',
          logo: 'three',
        },
        {
          title: 'item4',
          logo: 'four',
        },
        {
          title: 'item5',
          logo: 'five',
        },
        {
          title: 'item6',
          logo: 'six',
        },
      ],
    };
  },
  computed: {
    iconsSvg() {
      return import.meta.glob('../assets/numbers/*', { eager: true, import: 'default' });
    },
  },
  methods: {
    getIcon(name) {
      return this.iconsSvg[`../assets/numbers/${name}.svg`];
    },
  },
};
</script>

<style lang="scss" scoped>
.icon-card > img {
  filter: invert(1);
  padding: 1rem;
}

.icon-card {
  background-color: var(--bs-primary);
  height: 100%;
  border-radius: 50%;
}

p {
  font-size: 15px;
}
</style>
