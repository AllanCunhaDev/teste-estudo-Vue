 

<template>
  <div class="div_container_geral">
    <header class="container_header">
      <h1>
        Noticias People55
      </h1>
    </header>
    <div class="container_noticias">
      <article v-for="noticias in listaNoticias" class="grid_noticias">
        <h2>{{ noticias.title }}</h2>
        <img v-bind:src="noticias.image" alt="imagem da noticia">
        <div class="container_date_author">
          <p> Por: {{ noticias.author }}</p>
          <p class="p_date">{{ noticias.date }}</p>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
import { defineComponent, onMounted, ref } from "vue";
import Api from "../services/axios/api";
export default defineComponent({
  setup() {
    const listaNoticias = ref([]);

    const fetchNoticias = async () => await Api
      .get("/news")
      .then((response) => listaNoticias.value = response.data);

    onMounted(fetchNoticias);
    return { listaNoticias };
  }
});
</script>

<style>
.div_container_geral {
  width: 100vw;
  height: 100vh;

}

.container_header {
  width: 100%;
  height: 100px;
  background-color: #ff9b37;
  display: flex;
  align-items: center;
  justify-content: center;
}

.container_header h1 {
  width: 90%;
  font-size: 36px;
  color: white;
  font-weight: 700;
}

.container_noticias {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 65%;
  margin: 0 auto;
}

.container_noticias h2 {
  font-size: 20px;
  color: #ff9b37;
  margin-bottom: 20px;
}

.container_noticias img {
  width: 300px;
  height: 150px;
  border-radius: 8px;
}

.container_date_author {
  width: 80%;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
}

.container_date_author p {
  font-size: 16px;
  font-weight: 600;
  color: black;

}

.container_date_author .p_date {
  font-size: 12px;
  font-weight: 600;
  color: #2e2e2e;
}

.grid_noticias {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  width: 300px;
  margin: 20px 20px;

}
</style>