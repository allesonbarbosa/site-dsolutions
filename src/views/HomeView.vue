<template>
  <div>
    <NavBar />
    <AboutView />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import AboutView from './AboutView.vue';
export default {
  name: 'HomeView',
  components: {
    NavBar,
    AboutView,
  },
};
</script>

<style lang="scss" scoped></style>
