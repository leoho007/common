<template>
  <div>
    <h1>Beta</h1>
  </div>
</template>
<script>
  export default {
    name: "Beta",
    props: ["from"],
    data() {
      console.log("******");
      console.log(`${this.$options.name} :data`);
      console.log("props.from:", this.from);
      console.log("data.title:", this.title);
      console.log("computed.name:", this.name, "\n");
      console.log("\n");
      return {
        title: `${this.$options.name}  Title`
      };
    },
    beforeCreate() {
      console.log("******");
      let name = this.$options.name;
      console.log(name, ":beforeCreate");
      console.log("props.from:", this.a);
      console.log("data.title:", this.title);
      console.log("computed.name:", this.name, "\n");
      console.log("\n");
    },
    created() {
      console.log("******");
      let name = this.$options.name;
      console.log(name, ":created");
      console.log("props.from:", this.from);
      console.log("data.title:", this.title);
      console.log("computed.name:", this.name, "\n");
      console.log("\n");
    },

    beforeMount() {
      console.log("******");
      let name = this.$options.name;
      console.log(name, ":beforeMount");
      let name2 = this.name;
      console.log("data.title:", this.title);
      console.log("computed.name:", this.name, "\n");
      console.log("\n");
    },
    mounted() {
      console.log("******");
      let name = this.$options.name;
      console.log(name, ":mounted");
      let name2 = this.name;
      console.log("data.title:", this.title);
      console.log("computed.name:", this.name, "\n");
      console.log("\n");
    },

    beforeUpdate() {
      console.log("******");
      let name = this.$options.name;
      console.log(name, ":beforeUpdate");
      console.log("data.title:", this.title);
      console.log("computed.name:", this.name, "\n");
      console.log("\n");
    },
    updated() {
      console.log("******");
      let name = this.$options.name;
      console.log(name, ":updated");
      console.log("data.title:", this.title);
      console.log("computed.name:", this.name, "\n");
      console.log("\n");
    },

    beforeDestroy() {
      console.log("******");
      let name = this.$options.name;
      console.log(name, ":beforeDestroy");
      console.log("data.title:", this.title);
      console.log("computed.name:", this.name, "\n");
      console.log("\n");
    },
    destroyed() {
      console.log("******");
      let name = this.$options.name;
      console.log(name, ":destroyed");
      console.log("data.title:", this.title);
      console.log("computed.name:", this.name, "\n");
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
