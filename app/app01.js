const app01 = new Vue({
    el: '#app',
    data: {
        msg: 'yea_baby',
        lista: [
            {nombre: 'manzana', q: 0},
            {nombre: 'fresa', q: 2}
        ],
        nuevaFruta: {nombre: '', q: 0},
        total: 0
    },
    methods: {

        agregarFruta() {
            this.lista.push(
                {
                    nombre: this.nuevaFruta.nombre,
                    q: parseInt(this.nuevaFruta.q)
                }
            );

            this.nuevaFruta.nombre = '';
            this.nuevaFruta.q = '';
        }

    },
    computed: {
        sumarFrutas() {

            this.total = this.lista
                .reduce((total, item) => {
                    total += item.q;
                    return total;
                }, 0)
            ;

            return this.total;
        }
    }
});