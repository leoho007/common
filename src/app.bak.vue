<template>
  <div>
    <router-link to="/foo">Go to Foo</router-link>
    <span>|</span>
    <router-link to="/bar">Go to Bar</router-link>
    <span>|</span>
    <router-link to="/foobar">Go to Foobar</router-link>
    <span>|</span>
    <router-link to="/beta">Go to Beta</router-link>
    <div>
      <!-- <router-view></router-view> -->
    </div>
    <!-- <Comp1></Comp1> -->
    <!-- <button @click="addBst">Insert</button>
    <div>
      <Bstx v-bind:node="bst.__Root__"></Bstx>
    </div> -->

  </div>
</template>

<script>
  import axios from "axios";
  import Bstx from "./bst.vue";
  import Bst from "./bst.js";
  import $ from "jquery";
  import Mock from "mockjs";

  axios.interceptors.request.use(
    function(config) {
      // Do something before request is sent
      console.log("global req -s");
      return config;
    },
    function(error) {
      // Do something with request error
      console.log("global req -e");
      return Promise.reject(error);
    }
  );

  // Add a response interceptor
  axios.interceptors.response.use(
    function(response) {
      // Do something with response data
      console.log("global res -s ");
      return response;
    },
    function(error) {
      console.log("global res -e");
      // Do something with response error
      return Promise.reject(error);
    }
  );
  export default {
    components: {
      Bstx
    },
    data() {
      return {
        name: "CLQ & HL",
        bst: (function() {
          var B = new Bst();
          var bst = [
            50,
            1,
            6,
            8,
            21,
            3,
            4,
            53,
            2,
            35,
            6,
            7,
            7,
            43,
            3,
            3,
            4545,
            5,
            3443,
            66,
            6,
            5
          ];
          //   bst.forEach(element => {
          //     B.insert(element);
          //   });
          return B;
        })()
      };
    },
    created() {
      var data = Mock.mock({
        // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
        "list|1-10": [
          {
            // 属性 id 是一个自增数，起始值为 1，每次增 1
            "id|+1": 1
          }
        ]
      });
      // 输出结果
      console.log(JSON.stringify(data, null, 4));
      Mock.mock("/news/index", "post", function() {
        return data;
      });
      axios
        .post("/news/index", {
          firstName: "Fred",
          lastName: "Flintstone"
        })
        .then(function(response) {
          console.log("curr res -s");
          console.log(response);
        })
        .catch(function(error, response) {
          // console.log(response)
          console.log(error);
        });

      // ajax interceptor
      //   $.ajaxPrefilter(function(options, originalOptions, jqXHR) {
      //     //错误劫持
      //     var error = options.error;
      //     options.error = function(jqXHR, textStatus, errorThrown) {
      //       console.log("intercept error");

      //       /**自定义操作空间，不一定要执行原error */
      //       if (error && typeof error == "function") {
      //         error(jqXHR, textStatus, errorThrown);
      //       }
      //     };

      //     //成功劫持
      //     var success = options.success;
      //     options.success = function(jqXHR, textStatus, errorThrown) {
      //       console.log("intercept success");
      //       if (error && typeof error == "function") {
      //         success(jqXHR, textStatus, errorThrown);
      //       }
      //     };
      //   });

      //   //全局事件触发
      //   $(document).ajaxSuccess(function(event, request, settings) {
      //     console.log("global success");
      //   });
      //   $(document).ajaxError(function(event, request, settings) {
      //     console.log("global error");
      //   });

      //   //默认设置
      //   $.ajaxSetup({
      //     beforeSend: function() {
      //       console.log("beforesend default");
      //     },
      //     success: function() {
      //       console.log("success default");
      //     },
      //     error: function() {
      //       console.log("error default");
      //     }
      //   });
      //   $.ajax({
      //     method: "post",
      //     url: "http://0.0.0.0:3000",
      //     beforeSend: function() {
      //       console.log("beforesend current");
      //     },
      //     success: function(data) {
      //       console.log("success current");
      //     },
      //     error: function() {
      //       console.log("error current");
      //     }
      //   });
    }
    // methods: {
    //   addBst() {
    //     var num = Math.floor(Math.random() * 1000);
    //     this.bst.insert(num);
    //   }
    // }
  };
</script>

<style lang="scss">
  div {
    color: red;
  }
</style>