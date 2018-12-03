<template>
  <div id="form">
    <form @submit.prevent="submit">
      <h2>{{legend}}</h2>
      <label for="name">Nom</label>
      <input v-model="contact.annuaire_nom" required type="text" placeholder="Renseignez le nom">
      <label>Prénom</label>
      <input v-model="contact.annuaire_prenom" required type="text" placeholder="Renseignez le prénom">
      <label>Téléphone 1</label>
      <input v-model="contact.annuaire_telephone1" required type="tel" placeholder="Renseignez le téléphone 1">
      <label>Téléphone 2</label>
      <input v-model="contact.annuaire_telephone2" required type="tel" placeholder="Renseignez le téléphone 2">
      <label>Email</label>
      <input v-model="contact.annuaire_email" required type="email" placeholder="Renseignez le mail">
      <button type="submit">Envoyer</button>
    </form>
  </div>
</template>

<script>
  import Contact from '../services/contacts.js'

  export default {
    name: 'ContactForm',
    props: {
      legend: String,
      contacts: [],
      contact: {
        annuaire_nom: {
          type: String,
          required: true
        },
        annuaire_prenom: {
          type: String,
          required: true
        },
        annuaire_telephone1: {
          type: String,
          required: true
        },
        annuaire_telephone2: {
          type: String,
          required: true
        },
      },
      error: String,
      submit: Function,
    }
  }
</script>


<style>
  form {
    width: 450px;
    padding: 20px 12px 10px 20px;
  }

  input {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    margin-top: 6px;
    margin-bottom: 16px;
    resize: vertical;
  }

</style>