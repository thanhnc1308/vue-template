import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        test: 0
    },
    getters: {
        doubleTest: state => {
            return state.test * 2;
        }
    }
})