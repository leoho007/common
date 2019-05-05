
<template>
  <!-- <ul>
    <li v-for="(item,index) in list " :key="index">
      <p>{{item.name}}</p>
      <tree-menus :list="item.cList"></tree-menus>
    </li>
  </ul> -->
  <!-- <ul>
    <li :class="className">
      <p :class="className">{{node.key}}</p>
      <tree-menus
        v-if="node.left"
        :node="node.left"
        :className="'left'"
      ></tree-menus>
      <tree-menus
        v-if="node.right"
        :node="node.right"
        :className="'right'"
      ></tree-menus>
    </li>
  </ul> -->

  <div
    v-if="node"
    class="node"
    :class="className"
  >
    <div
      class="title"
      :class="{[className]:true,'has-children':node.left||node.right}"
    >{{node.key}}</div>
    <div
      v-if="node.left||node.right"
      class="children"
    >

      <tree-menus
        v-if="node.right"
        :node="node.right"
        :className="'right'"
      ></tree-menus>
      <tree-menus
        v-if="node.left"
        :node="node.left"
        :className="'left'"
      ></tree-menus>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TreeMenus",
    props: {
      node: Object,
      className: String
    }
  };
</script>


 <style>
  .left {
    color: teal;
  }
  .right {
    color: tomato;
  }

  /* new */

  * {
    box-sizing: content-box;
    direction: ltr;
  }
  .node .title {
    min-width: 3em;
    /* max-width: 3em; */
  }
  .node .title::before {
    content: " - ";
    color: grey;
  }
  .node .title.has-children::after {
    content: " -- ";
    color: grey;
  }
  .node .children,
  .node .title {
    display: inline-block;
    vertical-align: top;
  }
  .node .children {
    border-left: 1px dashed gray;
    margin-top: 0.5em;
  }
  .node .children::before {
    /* content: '--'; */
  }
</style>