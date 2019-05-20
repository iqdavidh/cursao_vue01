
const app = new Vue({
    el: '#app',
    store: store,
    methods: {
        ...Vuex.mapActions(['obtenerCursos'])
    },
    computed: {
        ...Vuex.mapState(['cursos'])
    },
    mounted() {
        this.obtenerCursos();
        console.log('mounted');
    }
});


function getTokenFecha() {
    let fecha = new Date();
    let codeFecha = fecha.getFullYear().toString();
    let m = fecha.getMonth() + 1;
    codeFecha += (m < 10 ? "0" : "") + m.toString();
    m = fecha.getDate();
    codeFecha += (m < 10 ? "0" : "") + m.toString();
    m = fecha.getHours();
    codeFecha += "-" + (m < 10 ? "0" : "") + m.toString();
    m = fecha.getMinutes();
    codeFecha += ":" + (m < 10 ? "0" : "") + m.toString();
    let code = "/* Build_" + codeFecha + "*/";
    return code;
}

console.log(getTokenFecha());