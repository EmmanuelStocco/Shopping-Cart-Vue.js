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
    }
}