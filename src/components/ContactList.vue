<template>
  <div id="list">
    <table>
      <thead>
        <tr>
          <th>NOM</th>
          <th>PRENOME</th>
          <th>OPTIONS</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="contact of contacts" :key="contact.id">
          <td> {{ contact.annuaire_nom }}</td>
          <td> {{ contact.annuaire_prenom }}</td>
          <button @click="editing(contact)">Voir / Modifier</button>
          <button @click="deleting(contact)">Effacer</button>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: 'ContactList',
    props: {
      contacts: {},
      deleting: Function,
      editing: Function,
    },
    methods: {}
  }
</script>

<style>
  #list {
    text-align: center;
  }
</style>