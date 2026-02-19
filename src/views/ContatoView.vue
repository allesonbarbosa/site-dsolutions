<template>
  <section id="contato" class="bg-primary mt-3 p-md-5 p-3">
    <BaseCard class="px-md-5 px-2 py-3">
      <div class="text-center">
        <h1 class="text-white">{{ $t('contatoCard.titulo') }}</h1>
        <p class="text-light">{{ $t('contatoCard.descricao') }}</p>
        <p class="text-light">{{ $t('contatoCard.subtitulo') }}</p>
      </div>
      <form @submit.prevent="submitForm">
        <!-- Honeypot invisível (anti-spam) -->
        <input type="text" name="_honey" tabindex="-1" autocomplete="off" style="display: none" />
        <div class="mb-3">
          <label for="fNome" class="form-label text-white">{{
            $t('contatoCard.camposFormulario.nome')
          }}</label>
          <input v-model.trim="form.nome" type="text" class="form-control" id="fNome" required />
        </div>
        <div class="mb-3">
          <label for="fEmpresa" class="form-label text-white">{{
            $t('contatoCard.camposFormulario.empresa')
          }}</label>
          <input
            v-model.trim="form.empresa"
            type="text"
            class="form-control"
            id="fEmpresa"
            required
          />
        </div>
        <div class="mb-3">
          <label for="fEmail" class="form-label text-white">{{
            $t('contatoCard.camposFormulario.email')
          }}</label>
          <input
            v-model.trim="form.emailCorporativo"
            type="email"
            class="form-control"
            id="fEmail"
            aria-describedby="emailHelp"
            required
          />
        </div>
        <div class="mb-3">
          <label for="fTelefone" class="form-label text-white">{{
            $t('contatoCard.camposFormulario.telefone')
          }}</label>
          <input
            v-model.trim="form.telefone"
            type="text"
            class="form-control"
            id="fTelefone"
            required
          />
        </div>
        <div class="mb-3">
          <label for="fDescricao" class="form-label text-white">{{
            $t('contatoCard.camposFormulario.descricao')
          }}</label>
          <textarea
            v-model.trim="form.descricao"
            type="text"
            class="form-control"
            rows="3"
            id="fDescricao"
            required
          />
        </div>
        <button type="submit" class="btn btn-secondary w-100" :disabled="loading">
          <div v-if="loading">
            <span class="spinner-border spinner-border-sm me-1" aria-hidden="true"></span>
            <span role="status"> {{ $t('contatoCard.camposFormulario.loadingSubimt') }}</span>
          </div>
          <span v-else>
            {{ $t('contatoCard.camposFormulario.submit') }}
          </span>
        </button>
      </form>
    </BaseCard>
  </section>
</template>

<script>
import Swal from 'sweetalert2';

export default {
  name: 'ContatoView',
  data() {
    return {
      form: {
        nome: '',
        empresa: '',
        emailCorporativo: '',
        telefone: '',
        descricao: '',
      },
      loading: false,
    };
  },
  computed: {
    contactEmail() {
      return import.meta.env.VITE_CONTACT_EMAIL;
    },
  },
  methods: {
    async submitForm() {
      this.loading = true;

      const message = `Nome: ${this.form.nome}
Empresa: ${this.form.empresa}
Email: ${this.form.emailCorporativo}
Telefone: ${this.form.telefone}

Descrição: ${this.form.descricao}
      `;

      try {
        const response = await fetch(`https://formsubmit.co/ajax/${this.contactEmail}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            _subject: '📩 Novo contato pelo site',
            _template: 'table',
            message: message,
          }),
        });

        if (!response.ok) throw new Error('Erro ao enviar');
        this.openSuccessAlert();
        this.resetForm();
      } catch (error) {
        this.openErrorAlert();
      } finally {
        this.loading = false;
      }
    },
    openSuccessAlert() {
      Swal.fire({
        icon: 'success',
        title: this.$t('contatoCard.camposFormulario.feedback.tituloSucesso'),
        text: this.$t('contatoCard.camposFormulario.feedback.textoSucesso'),
        background: '#182230',
        confirmButtonText: this.$t('contatoCard.camposFormulario.fechar'),
        buttonsStyling: false,
        customClass: {
          popup: 'rounded-4 shadow',
          title: 'text-white fw-bold',
          htmlContainer: 'text-white',
          confirmButton: 'btn btn-secondary',
        },
      });
    },
    openErrorAlert() {
      Swal.fire({
        icon: 'error',
        title: this.$t('contatoCard.camposFormulario.feedback.tituloErro'),
        text: this.$t('contatoCard.camposFormulario.feedback.textoErro'),
        background: '#182230',
        confirmButtonText: this.$t('contatoCard.camposFormulario.fechar'),
        buttonsStyling: false,
        customClass: {
          popup: 'rounded-4 shadow',
          title: 'text-white fw-bold',
          htmlContainer: 'text-white',
          confirmButton: 'btn btn-secondary',
        },
      });
    },
    resetForm() {
      this.form = {
        nome: '',
        empresa: '',
        emailCorporativo: '',
        telefone: '',
        descricao: '',
      };
    },
  },
};
</script>
