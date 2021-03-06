Vue.component(
    'saludo',
    {
        template: `
<div>
    <h4>{{title}}</h4>
    <p>{{msg}}</p>
</div>
`,
        data() {
            return {
                title:'supertitulo',
                msg: 'saludo  2'
            };
        }
    }
);

Vue.component(
    'contador',
    {
        template:`
        <button @click="pasos++">+ {{pasos}}</button>
        `,
        data(){
            return {
                pasos:0
            }
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