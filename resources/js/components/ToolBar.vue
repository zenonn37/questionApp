<template>
  <v-toolbar>
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title>Voltional</v-toolbar-title>
    <v-spacer></v-spacer>
    <div class="hidden-sm-and-down">
      <router-link to="/forum">
        <v-btn flat>Ask Question</v-btn>
      </router-link>
      <v-btn flat>Category</v-btn>
      <router-link to="/login">
        <v-btn flat>Login</v-btn>
      </router-link>
    </div>
  </v-toolbar>
</template>

<script>
export default {};
</script>

<style>
</style>
