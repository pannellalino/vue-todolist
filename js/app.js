/*
Steps:
1. avere un elenco di task da fare o fatti
2. stamparli in pagina
3. al click del task fare il toggle del task fatto o meno
4. al click della croce eliminare il task se fatto, altrimenti scrivere un messaggio di errore
5. dopo aver scritto il task con invio o al click del bottone aggiungere il nuovo task (come non fatto) in cima all’elenco dei task
6. verificare la lunghezza minima del nuovo task
7. se l’elenco è vuoto non mostrare la lista ma mostrare il messaggio “Non ci sono task”
*/

const {createApp} = Vue;

createApp({
  data(){
    return{
      newProdottoString: '',
      errorString: '',
      tasks:[
        {
          prodotto: 'Pane',
          done: true
        },
        {
          prodotto: 'Pasta',
          done: false
        },
        {
          prodotto: 'Frutta',
          done: true
        }
      ]
    }
  },
  methods:{
    removeTask(indice){
      if(this.tasks[indice].done){
        this.tasks.splice(indice,1);
      }else{
      }
    },
    createTask(){
      this.errorString = '';
      if(this.newProdottoString.length < 3){
        this.errorString = 'Attenzione! Prodotto non valido';
      }else{
        const newProdotto = {
          prodotto: this.newProdottoString,
          done: false
        }
        this.tasks.push(newProdotto);
        this.newProdottoString = '';
      }
    }
  }
}).mount('#app')