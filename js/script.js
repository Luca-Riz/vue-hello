// Descrizione: Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Bonus: Aggiungere alla pagina un’immagine, presa anch’essa da un data.

const app = new Vue(
    {
        el: '#root',
        data: {
            message: "Ciao, sono un H1",
            colore: 'white',
            img: "img/ok.png"
        },    
    
        methods: {
        cambioColore: function(){
                if(this.colore == 'white'){
                this.colore = 'greenyellow'
                this.message = "Ciao, sono un H1 verde."
                } else {
                    this.colore = 'white'
                    this.message = "Ciao, sono un H1"
                }
            }
        }
    }
)



