const app01 = new Vue({
    el: '#app',
    data: {
        palabra: 'ejemplo',
        contador: 0,
        msg: 'soy ciclo de vida'
    },
    methods: {

    },
    computed: {
        compTextoInvertido() {

            let lista = this.palabra.split('');

            return lista.reverse().join('');
        },
        compStyleColorBar() {

            return {
                'bg-success': this.contador > 10,
                'bg-warning': this.contador <= 10
            }
        }

    },
    mounted() {
        console.log('x');
    }
});