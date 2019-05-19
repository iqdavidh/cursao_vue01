Vue.component(
    'hijo',
    {
        template: `
        <div class="pd-5 bg-success">
            <h4>hijo</h4>
            <p>Número: {{numero}}</p>  
            <p>Nombre: {{nombre}}</p>          
        </div>
        `,
        data() {
            return {
                nombre: 'x'
            }
        },
        props: [
            'numero'
        ],
        mounted() {

            this.$emit('nombre')
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
        @click="numeroPadre++"
        title="Número padre"
            > {{numeroPadre}}
        </span>         
    </h3>
    <p> </p>
    <hijo :numero="numeroPadre"></hijo>
</div>
`,
        data() {
            return {
                numeroPadre: 0
            };
        }
    }
);


const app = new Vue({
    el: '#app',
    data: {
        msg: 'yead'
    },
    methods: {},
    computed: {},
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
    return "\n\n" + "console.log('" + code + "');";
}

console.log(getTokenFecha());