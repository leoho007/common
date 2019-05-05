<template>
  <div>
    <h1>Comp2</h1>
  </div>
</template>

<script>
  export default {
    name: "Comp2",
    data() {
      console.log("******");
      console.log(`${this.$options.name} :data`);
      console.log("\n");

      return {
        title: "Foo Title"
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
    computed: {
      name() {
        console.log(`${this.$options.name} : computed.name`);
        return this.$options.name;
      }
    }
  };
</script>
