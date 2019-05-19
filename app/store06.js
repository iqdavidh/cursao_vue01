const store = new Vuex.Store({
    state: {
        numero: 10
    },
    mutations: {
        increment (state) {
            state.numero++;
        },
        disminuir(state){
            state.numero--;
        },
        agregar(state,n){
            this.state.numero+=n;
        }
    }
});

