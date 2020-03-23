import Vue from 'vue';
import VueX from 'vuex';

Vue.use(VueX);

export default new VueX.Store({
    state: {
        usrId: '',
        type: ''
    },
    mutations: {
        addUsr(state, val) {
            state.usrId = val;
        },
        addType(state, val) {
            state.type = val;
        }
    }
})