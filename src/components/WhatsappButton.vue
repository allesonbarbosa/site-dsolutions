<template>
  <div class="fixed-bottom text-end p-3">
    <img :src="icon" alt="whatsapp-icon" class="whatsapp-icon" />
  </div>
</template>

<script>
import WhatsappIcon from '../assets/icons/whatsapp.svg';

export default {
  name: 'WhatsappButton',
  data() {
    return {
      icon: WhatsappIcon,
    };
  },
};
</script>

<style lang="scss" scoped>
.whatsapp-icon {
  width: 50px;
}
.whatsapp-icon:hover {
  width: 55px;
  cursor: pointer;
  transition: 0.3s;
}
</style>
