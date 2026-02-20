<template>
  <div>
    <WhatsappButton />
    <NavBar />
    <Home2 />
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
import Home2 from './Home2.vue';
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
    Home2,
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
