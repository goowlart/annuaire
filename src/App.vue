<template>
  <div id="app">
    <ContactForm legend="Ajouter un nouveau contact" :contact="contact"  />

    <ContactList :contacts="contacts" :deleting="deleteContact" :editing=" editContact" />
  </div>
</template>

<script>
  import Contact from './services/contacts.js'
  import EventBus from './components/event-bus.js';

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

    EventBus.$on('i-got-clicked', function (contact) {
     list(contact)
    });
    },

    methods: {
       
       list: function list (contact) {
        Contact.listing().then(response => {
          this.contacts = response.data;
          this.error = ""
        }).catch(e => {
          this.error = e.response.statusText
        })
      },
        
      deleteContact: function (contact) {
        if (confirm('Voulez-vous supprimer ce contact?')) {
          Contact.deleting(contact).then(response => {
            this.list()
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