// initial state
const state = {
        notFoundText: ""
    },
    /* eslint-disable  no-unused-vars*/
    actions = {
        setText({ commit, state }, text) {

            commit ("onSetNotFound", text);
        }
    },
    mutations = {
        onSetNotFound(state, text) {
            state.notFoundText = text;
        }
    };

export default {
    namespaced: true,
    state,
    actions,
    mutations
};
