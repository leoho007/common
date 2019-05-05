<template>
  <div>
    <h1>CORS</h1>
    <button @click="getCorsData">Cors/data</button>
  </div>
</template>

<script>
  import axios from "axios";

  axios.interceptors.request.use(
    function(config) {
      console.log("global req -s");
      return config;
    },
    function(error) {
      console.log("global req -e");
      return Promise.reject(error);
    }
  );

  axios.interceptors.response.use(
    function(response) {
      console.log("global res -s");
      return response;
    },
    function(error) {
      console.log("global res -e");
      return Promise.reject(error);
    }
  );
  export default {
    components: {},
    data() {
      return {
        name: "CLQ & HL"
      };
    },
    created() {
      this.getCorsData();
    },
    methods: {
      getCorsData() {
        axios
          .post("http://0.0.0.0:3000/cors/data", {
            firstName: "Leo",
            lastName: "Ho"
          })
          .then(function(response) {
            console.log("curr res -s");
            console.log(response);
          })
          .catch(function(error, response) {
            console.log("curr res -e");
            console.log(response);
          });
      }
    }
  };
</script>

<style lang="scss">
</style>