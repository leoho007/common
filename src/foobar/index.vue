<template>
  <div>
    <h1>Foobar</h1>
    <button @click="toogle">Switch</button>
    <component :is="currentComp">
    </component>

  </div>
</template>
<script>
  import Comp1 from "./comp1.vue";
  import Comp2 from "./comp2.vue";
  export default {
    name: "Foobar",
    data: function() {
      console.log("******");
      console.log(`${this.$options.name} :data`);
      console.log("\n");

      return {
        currentComp: Comp1,
        title: "Foobar"
      };
    },
    beforeCreate() {
      console.log("******");
      let name = this.$options.name;
      console.log(name, ":beforeCreate");
      console.log("\n");
    },
    created() {
      console.log("******");
      let name = this.$options.name;
      console.log(name, ":created");
      console.log("\n");
    },

    beforeMount() {
      console.log("******");
      let name = this.$options.name;
      console.log(name, ":beforeMount");
      console.log("\n");
    },
    mounted() {
      console.log("******");
      let name = this.$options.name;
      console.log(name, ":mounted");
      console.log("\n");
    },

    beforeUpdate() {
      console.log("******");
      let name = this.$options.name;
      console.log(name, ":beforeUpdate");
      console.log("\n");
    },
    updated() {
      console.log("******");
      let name = this.$options.name;
      console.log(name, ":updated");
      console.log("\n");
    },

    beforeDestroy() {
      console.log("******");
      let name = this.$options.name;
      console.log(name, ":beforeDestroy");
      console.log("\n");
    },
    destroyed() {
      console.log("******");
      let name = this.$options.name;
      console.log(name, ":destroyed");
      console.log("\n");
    },
    methods: {
      toogle(e) {
        if (this.currentComp == Comp1) {
          this.currentComp = Comp2;
        } else {
          this.currentComp = Comp1;
        }
      }
    }
  };
</script>

