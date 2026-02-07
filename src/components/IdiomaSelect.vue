<template>
  <div class="dropdown me-3">
    <button
      class="btn dropdown-toggle d-flex align-items-center gap-1"
      type="button"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      <img :src="flagIcon" alt="flag-idioma" class="flag-idioma" />
    </button>
    <ul class="dropdown-menu dropdown-menu-end bg-secondary">
      <li>
        <a class="dropdown-item" href="#" @click="changeIdioma('pt')">
          <img :src="flag.pt" alt="flag-idioma" class="flag-idioma me-1" />
          Português
        </a>
      </li>
      <li>
        <a class="dropdown-item" href="#" @click="changeIdioma('en')">
          <img :src="flag.en" alt="flag-idioma" class="flag-idioma me-1" />
          Inglês</a
        >
      </li>
      <li>
        <a class="dropdown-item" href="#" @click="changeIdioma('es')">
          <img :src="flag.es" alt="flag-idioma" class="flag-idioma me-1" />
          Espanhol</a
        >
      </li>
    </ul>
  </div>
</template>

<script>
import FlagBr from '@/assets/br.svg';
import FlagEn from '@/assets/en.svg';
import FlagEs from '@/assets/es.svg';

export default {
  name: 'IdiomaSelect',
  data() {
    return {
      flag: {
        pt: FlagBr,
        en: FlagEn,
        es: FlagEs,
      },
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
