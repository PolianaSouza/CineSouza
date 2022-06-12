<template>

  <div id="meus-filmes">
    <h1>Meus Filmes</h1>
    <span v-if="filmes.length <= 0">
      Você não possui nenhum filme salvo!
    </span>

    <ul>
      <li v-for="filme in filmes" :key="filme.id">
        <img :src="filme.foto" :alt="filme.nome">
        <span>{{filme.nome}}</span>
        <div>
      <router-link :to="`/filme/${filme.id}`"><button>Ver detalhes</button></router-link>
          <button @click="excluir(filme.id)">Excluir</button>
        </div>
      </li>
    </ul>


  </div>

</template>

<script>
export default {
  data(){
    return {
      filmes: [],
    }
  },
  created(){
    // Vai criar a minha lista de filmes que estiver no local storage
    const minhaLista = localStorage.getItem('myFilme');
    // Converte a lista de filmes para colocar no array
    this.filmes = JSON.parse(minhaLista) || []
  },
  methods: {
    excluir(id){
      let filtroFilmes = this.filmes.filter((filme) => {
        return (filme.id !== id);
      });

      return this.filmes = filtroFilmes;

    }
  },
  watch: {
    filmes(){
      localStorage.setItem('myFilme', JSON.stringify(this.filmes));
    }
  }
}

</script>

<style scoped>
  #meus-filmes {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
  }

  ul {
    padding: 0;
  }

  ul li {
    padding: 0;
    list-style: none;
    min-width: 600px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  ul li img {
    width: 180px;
    margin: 10px;
    border-radius: 10px;
  }

  span {
    font-size: 25px;
  }

  button {
    margin-left:15px;
    font-size: 18px;
    padding: 10px;
    border: none;
    border-radius: 10px;
    transition: 0.5s;
  }

  button:hover {
    background-color: #630000;
    color: #FFF;
  }

  @media screen and (max-width: 800px){ 

  ul li img {
    width: 150px;
    margin: 2px;
  }

  span {
    font-size: 18px;
  }

  button {
    margin-left: 10px;
    font-size: 15px;
    padding: 10px;
    border: none;
    border-radius: 10px;
    transition: 0.5s;
  }

  }


</style>