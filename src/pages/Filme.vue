<template>
  <div id="filme">
    <div class="container" v-if="loading">
      <Loading/>
    </div>
      <div class="container" v-else>
        <h2> {{filme.nome}} </h2>
        <img :src="filme.foto" :alt="filme.nome">
        <h3>Sinopse</h3>
        <p> {{filme.sinopse}} </p>
        <div class="botoes">
          <router-link to="/"><button>Ver mais filmes</button></router-link>
          <button @click="salvarFilme" >Salvar</button>
          <button><a :href="`https://youtube.com/results?search_query=${filme.nome}`" target="_blank">Trailer</a></button>
        </div>
      </div>
  </div>
</template>

<script>

import api from '../services/api';
import Loading from '../components/Loading.vue'

export default {

  components: {
    Loading
  },
  props: ['id'],
  data(){
    return {
      filme: {},
      loading: true
    }
  },

  async created() {
    const response = await api.get(`?api=filmes/${this.id}`);
    this.filme = response.data;
    this.loading = false
  },

  methods: {
    salvarFilme(){
      const minhaLista = localStorage.getItem('myFilme');
      let filmes = JSON.parse(minhaLista) || [];

      // Se tiver um filme com id igual ao que está tentando adicionar, devolve true
      const hasFilme = filmes.some( (filme) => filme.id === this.filme.id);
      if(hasFilme){
        alert('Esse filme já está em sua lista!')
        return;
        // Para o código aqui
      }

      filmes.push(this.filme);
      localStorage.setItem('myFilme', JSON.stringify(filmes));
      alert('Filme salvo com sucesso!')

    }
  }

}
</script>

<style scoped>

  .container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    max-width: 900px;
    min-height: 700px;
  }

  h2 {
    color: #EEEBDD;
    margin-bottom: 0px;
    background: #630000;
    padding: 15px;
    border-radius: 20px 20px 0 0;
  }

  .container img {
    width: 100%;
    border-radius: 0 0 20px 20px;
  }

  button {
    margin-right: 5px;
    border-radius: 5px;
    margin-top: 15px;
    cursor: pointer;
    border: 0;
    padding: 12px;
    font-size: 20px;
    transition: all 0.5s;
    outline: none;
    background: #EEEBDD;
  }

  button:hover {
    background: #000000;
    color: #FFF;
  }

  a {
    text-decoration: none;
    color: #000;
    transition: all 0.5s;
  }

  a:hover {
    color: #FFF;
  }

  @media screen and (max-width: 800px) {
    .container {
    max-width: 380px;
    max-height: 300px;
  }
    
  }

</style>