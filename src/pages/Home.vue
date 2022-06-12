<template>
  <div id="home">
    <div class="lista-filmes" v-if="loading">
      <Loading/>
    </div>
      <div class="lista-filmes" v-else>
        <article class="filmes" v-for="filme in filmes" :key="filme.id">
          <strong> {{filme.nome}} </strong>
          <img :src="filme.foto" :alt="filme.nome">
          <router-link :to=" `/filme/${filme.id}` ">Acessar</router-link>
        </article>
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
  data(){
    return {
      filmes: [],
      loading: true,
    }
  },
  async created() {
    //Api URL: https://sujeitoprogramador.com/r-api/    ?api=filmes
    const response = await api.get('?api=filmes');
    this.filmes = response.data;
    this.loading = false;
  },
}
</script>

<style scoped>
  #home {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 800px;
  }

  .lista-filmes {
    margin: 15px;
  }

  .lista-filmes article {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    margin: 15px;
    padding: 15px;
    border-radius: 5px;
  }

  .lista-filmes strong {
    padding-bottom: 15px;
    font-size: 20px;
  }

  img {
    max-height: 350px;
    width: 900px;
  }

  .lista-filmes article a {
    text-decoration: none;
    color: #fff;
    font-size: 25px;
    background-color: #630000;
    width: 100%;
    height: 40px;
    margin-top: -30px;
    padding-top: 10px;
    text-align: center;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }
  
  @media screen and (max-width: 800px){
    img {
      max-height: 300px;
      width: 350px;
    }

    .lista-filmes article a {
      font-size: 20px;
    }

    #home {
    width: 100%;
  }

  }

</style>