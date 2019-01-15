<template>
  <div>
    <tool-bar></tool-bar>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
import ToolBar from "./ToolBar.vue";
import AppFooter from "./AppFooter.vue";
export default {
  components: {
    ToolBar,
    AppFooter
  }
};
</script>

<style>
</style>
