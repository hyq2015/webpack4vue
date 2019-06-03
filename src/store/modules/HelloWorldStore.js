// initial state
const state = {
        userUrl: ""
    },
    /* eslint-disable  no-unused-vars*/
    actions = {
        setUerUrl({ commit, state }, text) {
            commit ("onSetUerUrl", text);
        }
    },
    mutations = {
        onSetUerUrl(state, text) {
            state.userUrl = text;
        }
    };

export default {
    namespaced: true,
    state,
    actions,
    mutations
};
