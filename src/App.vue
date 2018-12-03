<template>
  <div id="app">
    <ContactForm legend="Ajouter un nouveau contact" :contact="contact" :submit="addContact" />

    <ContactList :contacts="contacts" :deleting="deleteContact" :editing=" editContact" />
  </div>
</template>

<script>
  import Contact from './services/contacts.js'
  import ContactList from './components/ContactList.vue'
  import ContactForm from './components/ContactForm.vue'
  export default {
    name: 'app',
    data() {
      return {
        contacts: [],
        contact: {
          annuaire_id: "",
          annuaire_nom: "",
          annuaire_prenom: "",
          annuaire_telephone1: "",
          annuaire_telephone2: "",
          annuaire_email: ""
        },
        error: ""
      }
    },
    components: {
      ContactList,
      ContactForm
    },
    mounted() {
      this.list()
    },
    methods: {
      addContact: function () {
        Contact.saving(this.contact).then(response => {
          alert('Le contact a été enregistré avec succès!')
          this.list()
          this.contact = {}
          this.error = ""
        }).catch(e => {
          this.error = e.response.statusText
        })
      },
      deleteContact: function (contact) {
        if (confirm('Voulez-vous supprimer ce contact?')) {
          Contact.deleting(contact).then(response => {
            this.list();
            this.error = "";
          }).catch(e => {
            this.error = e.response.statusText
          })
        }
      },
      editContact: function (contact) {
        this.contact = contact
        this.list()
      },
      list() {
        Contact.listing().then(response => {
          this.contacts = response.data;
          this.error = ""
        }).catch(e => {
          this.error = e.response.statusText
        })
      }
    },
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 30px;
  }
  button {
    background-color: #ccc;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    margin-top: 6px;
    margin-left: 6px;
  }
  #form,
  #list {
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>