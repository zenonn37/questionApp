<template>
  <v-form v-model="valid">
    <v-container>
      <v-layout>
        <v-flex xs12 md4>
          <v-text-field v-model="form.email" label="E-mail" required></v-text-field>
        </v-flex>
        <v-flex xs12 md4>
          <v-text-field v-model="form.password" label="Password" required></v-text-field>
        </v-flex>
      </v-layout>
    </v-container>
  </v-form>
</template>

<script>
export default {};
</script>

<style>
</style>
