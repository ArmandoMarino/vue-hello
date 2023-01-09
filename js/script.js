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
            imageUrl: "https://i.picsum.photos/id/284/200/200.jpg?hmac=_el2jO-f8UzHfdcTCAXQOD8XX2N6jqVZHwvC23Xm8p8",
        }
    }
});


app.mount('#root');
