console.log("JS OK");
console.log(Vue + "Vue OK");

// TRACCIA
// Descrizione:
// Stampare a schermo un messaggio all’interno di un h1,
//  utilizzando i data.
// Bonus:
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.


const app = Vue.createApp({
    data() {
        return{
            message: "Ciao classe 83 !",
            imageUrl: "https://picsum.photos/200",
        }
    }
});


app.mount('#root');
