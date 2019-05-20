/*
* actions son las formas posibles en que puede cambiar el state
*  a partir de eventos del view
* */
const store = new Vuex.Store({
    state: {
        cursos: [],
    },
    mutations: {
        setCursos(state, data) {
            state.cursos = data;
        }
    },
    actions: {
        obtenerCursos: async function ({commit}) {
            const data = await fetch('app/data07.json');
            const cursos = await data.json();
            commit('setCursos',cursos);
        }
    }
});

