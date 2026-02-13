<template>
  <div class="dropdown">
    <button
      class="btn dropdown-toggle d-flex align-items-center gap-1"
      type="button"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      <img :src="flagIcon" alt="flag-idioma" class="flag-idioma" />
    </button>
    <ul class="dropdown-menu dropdown-menu-end bg-secondary">
      <li v-for="(idioma, index) in idiomas" :key="index">
        <a class="dropdown-item" href="#" @click="changeIdioma(idioma)">
          <img :src="flag[idioma]" alt="flag-idioma" class="flag-idioma me-1" />
          {{ $t(`idiomas.${idioma}`) }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import FlagBr from '@/assets/flags/br.svg';
import FlagEn from '@/assets/flags/en.svg';
import FlagEs from '@/assets/flags/es.svg';

export default {
  name: 'IdiomaSelect',
  data() {
    return {
      flag: {
        pt: FlagBr,
        en: FlagEn,
        es: FlagEs,
      },
      idiomas: ['pt', 'en', 'es'],
    };
  },
  computed: {
    flagIcon() {
      const locale = this.$route.params.locale;
      return this.flag[locale] || this.flag.pt;
    },
  },
  methods: {
    changeIdioma(locale) {
      this.$router.push({
        params: { ...this.$route.params, locale },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.flag-idioma {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
}

.dropdown-toggle::after {
  color: white;
}
</style>
