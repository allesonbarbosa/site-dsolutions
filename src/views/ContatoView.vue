<template>
  <section id="contato" class="bg-primary mt-3 p-5">
    <BaseCard class="px-5 py-3">
      <div class="text-center">
        <h1 class="text-white">{{ $t('contatoCard.titulo') }}</h1>
        <p class="fs-5 text-light">{{ $t('contatoCard.descricao') }}</p>
        <p class="fs-5 text-light">{{ $t('contatoCard.subtitulo') }}</p>
      </div>
      <form @submit.prevent="">
        <div class="mb-3">
          <label for="fNome" class="form-label text-white">{{
            $t('contatoCard.camposFormulario.nome')
          }}</label>
          <input type="text" class="form-control" id="fNome" required />
        </div>
        <div class="mb-3">
          <label for="fEmpresa" class="form-label text-white">{{
            $t('contatoCard.camposFormulario.empresa')
          }}</label>
          <input type="text" class="form-control" id="fEmpresa" required/>
        </div>
        <div class="mb-3">
          <label for="fEmail" class="form-label text-white">{{
            $t('contatoCard.camposFormulario.email')
          }}</label>
          <input type="email" class="form-control" id="fEmail" aria-describedby="emailHelp" required/>
        </div>
        <div class="mb-3">
          <label for="fTelefone" class="form-label text-white">{{
            $t('contatoCard.camposFormulario.telefone')
          }}</label>
          <input type="text" class="form-control" id="fTelefone" required/>
        </div>
        <div class="mb-3">
          <label for="fDescricao" class="form-label text-white">{{
            $t('contatoCard.camposFormulario.descricao')
          }}</label>
          <textarea type="text" class="form-control" rows="3" id="fDescricao" required/>
        </div>
        <button type="submit" class="btn btn-secondary w-100">{{ $t('contatoCard.camposFormulario.submit') }}</button>
      </form>
    </BaseCard>
  </section>
</template>

<script>
export default {
  name: 'ContatoView',
};
</script>

<style lang="scss" scoped></style>
