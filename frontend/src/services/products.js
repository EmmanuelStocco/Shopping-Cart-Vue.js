import { http } from './config'

export default {
    listPhones: () => {
        return http.get('phone')
    },

    listTv: () => {
        return http.get('tv')
    },

    listInternet: () => {
        return http.get('internet')
    },

    dataPost: (cart) => {
        //console.log(cart)
        return http.post('dataPosted', cart)
    }
}