<template>
  <div>
    <NavBar />
    <AboutView />
    <SolucoesView />
    <AtuacoesView />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import AboutView from './AboutView.vue';
import SolucoesView from './SolucoesView.vue';
import AtuacoesView from './AtuacoesView.vue';

export default {
  name: 'HomeView',
  components: {
    NavBar,
    AboutView,
    SolucoesView,
    AtuacoesView,
  },
};
</script>

<style lang="scss" scoped></style>
