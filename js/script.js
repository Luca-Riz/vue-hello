// Descrizione: Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Bonus: Aggiungere alla pagina un’immagine, presa anch’essa da un data.

const app = new Vue(
    {
        el: '#root',
        data: {
            a:"",
            b:""
        },
        methods:{
            // area:function(){
            //     alert(this.a*this.b);
            // }
            //oppure
            area(){
                alert('l\'area del rettangolo è ' + this.a*this.b);
            }
        }
    }
)