<template>
  <div class="text-end p-3 whatsapp-container">
    <a :href="`https://wa.me/${whatsappNumber}?text=Olá, gostaria de mais informações`" target="_blank">
      <img :src="icon" alt="whatsapp-icon" class="whatsapp-icon" />
    </a>
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
  computed: {
    whatsappNumber() {
      return import.meta.env.VITE_WHATSAPP_NUMBER;
    },
  },
};
</script>

<style lang="scss" scoped>
.whatsapp-container {
  width: 80px;
  position: fixed;
  right: 0;
  bottom: 0;
  left: 50;
  z-index: 1030;
}
.whatsapp-icon {
  width: 50px;
}
.whatsapp-icon:hover {
  width: 55px;
  cursor: pointer;
  transition: 0.3s;
}
</style>
