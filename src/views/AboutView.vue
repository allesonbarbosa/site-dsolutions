<template>
  <div class="vh-100 d-flex justify-content-center">
    <div class="row w-100">
      <div class="col-md-4">
        <BaseCard>
        <h3>{{ $t('aboutCard.quemSomos.titulo') }}</h3>
        <p class="fs-6">{{ $t('aboutCard.quemSomos.descricao') }}</p>
        </BaseCard>
      </div>
      <div class="col-md-3">
        <BaseCard></BaseCard>
      </div>
      <div class="col-md-3">
        <BaseCard></BaseCard>
      </div>
      <div class="col-md-3">
        <BaseCard></BaseCard>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
