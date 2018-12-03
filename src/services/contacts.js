import { http } from './config'

export default {
    listing: () => {
        return http.get('annuaire')
    },
   
    saving:(contact) => {
         return http.post('annuaire' , contact)
    },

    update:(contact) => {
        return http.put('annuaire', contact)
    },

    deleting:(contact) => {
        return http.delete('annuaire/'+contact.annuaire_id, { data: contact})
    },
}