Vue.component(
    'hijo',
    {
        template: `
        <div class="pd-5 bg-success">
            <h4>hijo</h4>
            <p>Número: {{numero}}</p>  
            <button @click="increment">+</button>       
            <button @click="disminuir">-</button>       
            <button @click="agregar(3)">+3</button>       
        </div>
        `,
        computed:{
            ...Vuex.mapState(['numero'])
        },
        methods:{
            ...Vuex.mapMutations(['increment','disminuir','agregar'])
        }
    }
);

Vue.component(
    'padre',
    {
        template: `
<div class="p-5 bg-dark text-white">
    <h3>
        Componente padre  
        <span 
        class="badge badge-info" 
        @click=""
        title="Número padre"
            > {{numero}}
        </span>         
    </h3>
    
    <hijo></hijo>
</div>
`,
        computed:{
            ...Vuex.mapState(['numero'])
        }

    }
);


const app = new Vue({
    el: '#app',
    store: store,
    methods: {},
    computed: {

    },
    mounted() {
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