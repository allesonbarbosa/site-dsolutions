<template>
  <div>
    <WhatsappButton />
    <NavBar />
    <HomeView />
    <div class="d-flex flex-column gap-5 mt-4 px-md-5 px-3">
      <AboutView />
      <SolucoesView />
      <AtuacoesView />
    </div>
    <ContatoView />
    <FooterView />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import HomeView from './HomeView.vue';
import AboutView from './AboutView.vue';
import SolucoesView from './SolucoesView.vue';
import AtuacoesView from './AtuacoesView.vue';
import ContatoView from './ContatoView.vue';
import FooterView from './FooterView.vue';
import WhatsappButton from '@/components/WhatsappButton.vue';

export default {
  name: 'PageView',
  components: {
    HomeView,
    NavBar,
    AboutView,
    SolucoesView,
    AtuacoesView,
    ContatoView,
    FooterView,
    WhatsappButton
  },
};
</script>

<style lang="scss" scoped></style>
