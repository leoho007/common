<template>
  <div>
    <h1>FOO</h1>
    <span>{{name}}</span>
    <button @click="click">foo</button>
    <span>{{total}}</span>
    <div class="prismatic">
      <div class="petal  left">
      </div>
      <div class="petal right">
      </div>

    </div>
    <div>
      <div class="prismatic2"></div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "Foo",
    data() {
      console.log("******");
      console.log(`${this.$options.name} :data`);
      console.log("\n");
      return {
        title: `${this.$options.name}  Title`,
        num:0
      };
    },
    beforeCreate() {
      console.log("******");
      let name = this.$options.name;
      console.log(name, ":beforeCreate");
      console.log(`data.num: ${this.num}`)
      console.log("data.title:", this.title);
      console.log("computed.name:", this.name, "\n");
      console.log(`$el:${this.$el}`)
      console.log("\n");
    },
    created() {
      console.log("******");
      let name = this.$options.name;
      console.log(name, ":created");
      console.log(`data.num: ${this.num}`)
      console.log("data.title:", this.title);
      console.log("computed.name:", this.name, "\n");
      console.log(`$el:${this.$el}`)

      console.log("\n");
    },

    beforeMount() {
      console.log("******");
      let name = this.$options.name;
      console.log(name, ":beforeMount");
      console.log(`data.num: ${this.num}`)
      console.log("data.title:", this.title);
      console.log("computed.name:", this.name, "\n");
      console.log(`$el:${this.$el}`)

      console.log("\n");
    },
    mounted() {
      console.log("******");
      let name = this.$options.name;
      console.log(name, ":mounted");
      console.log(`data.num: ${this.num}`)
      console.log("data.title:", this.title);
      console.log("computed.name:", this.name, "\n");
      console.log(`$el:${this.$el}`)
      console.log("\n");
    },

    beforeUpdate() {
      console.log("******");
      let name = this.$options.name;
      console.log(name, ":beforeUpdate");
      console.log(`data.num: ${this.num}`)
      console.log("data.title:", this.title);
      console.log("computed.name:", this.name, "\n");
      console.log("\n");
    },
    updated() {
      console.log("******");
      let name = this.$options.name;
      console.log(name, ":updated");
      console.log(`data.num: ${this.num}`)
      console.log("data.title:", this.title);
      console.log("computed.name:", this.name, "\n");
      console.log("\n");
    },

    beforeDestroy() {
      console.log("******");
      let name = this.$options.name;
      console.log(name, ":beforeDestroy");
      console.log(`data.num: ${this.num}`)
      console.log("data.title:", this.title);
      console.log("computed.name:", this.name, "\n");
      console.log(`$el:${this.$el}`)
      console.log("\n");
    },
    destroyed() {
      console.log("******");
      let name = this.$options.name;
      console.log(name, ":destroyed");
      console.log(`data.num: ${this.num}`)
      console.log("data.title:", this.title);
      console.log("computed.name:", this.name, "\n");
       console.log(`$el:${this.$el}`)
      console.log("\n");
    },
    computed: {
      name() {
        console.log(`${this.$options.name} : computed.name`);
        return this.$options.name;
      },
      total() {
        console.log(`${this.$options.name} : computed.total`);
        return this.num ** 2;
      }
    },
    methods:{
        click(){
            console.log('click')
            this.num++;
        }
    }
  };
</script>
<style lang="scss">
  .prismatic::before,
  .prismatic::after {
    content: " ";
    display: table;
  }
  .prismatic::after {
    clear: both;
  }
  .petal {
    box-sizing: border-box;
    display: inline-block;
    float: left;
    width: 2px;
    height: 0;
    border: 10px solid rgba(0, 0, 0, 0);
    &.left {
      border-right: 10px solid black;
      border-left: 0;
    }
    &.right {
      border-left: 10px solid black;
      border-right: 0;
    }
  }

  .prismatic2 {
    box-sizing: border-box;
    display: inline-block;
    vertical-align: middle;
    &::before,
    &::after {
      display: inline-block;
      content: "";
      width: 0;
      height: 0;
      border: 0.5em solid rgba(0, 0, 0, 0);
    }
    &::before {
      border-right: 0.5em solid green;
      border-left: 0;
    }
    &::after {
      border-left: 0.5em solid black;
      border-right: 0;
    }
  }
</style>
