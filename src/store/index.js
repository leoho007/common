import Vuex from 'vuex';
import Vue from 'vue';
Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
        count: 0,
        name: 'leo',
        base: 7,
        width: 4,
        height: 5
    },
    getters: {
        sx: state => state.width * state.height
    },
    mutations: {
        increment(state) {
            state.count++;
        },
        decrement(state) {
            state.count--;
        }
    },
    actions: {
        increment(context) {
            context.commit('increment');
        }
    },
    modules: {
        for: {},
        bar: {}
    }
});

export default store;
