<template>
  <div>
    <h1>BAR</h1>
    <span>count：{{count}}</span>
    <button v-on:click="clickMinus">-</button>
    <button v-on:click="clickPlus">+</button>
    <button v-on:click="click2">Action+</button>
  </div>
</template>

<script>
  import { mapState, mapMutations, mapGetters, mapActions } from "vuex";
  export default {
    data() {
      return {
        name: "bar",
        num: 2
      };
    },
    computed: {
      squarex2() {
        return this.$store.getters.sx;
      },
      ...mapState({
        count: state => state.count + state.base,
        sex: state => state.count ** 3,
        height: "height"
      }),
      ...mapGetters({
        sx: "sx"
      })
    },
    methods: {
      //   click: function(e) {
      //     this.$store.commit("increment");
      //   },
      ...mapMutations({
        clickPlus: "increment",
        clickMinus: "decrement"
      }),
      ...mapActions({
        click2: "increment"
      })
    }
  };
</script>