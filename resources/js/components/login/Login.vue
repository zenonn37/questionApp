<template>
  <v-container>
    <v-form @submit.prevent="login">
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

      <v-btn color="green" type="submit">Login</v-btn>
    </v-form>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: null,
        password: null
      }
    };
  },
  methods: {
    login() {
      User.login(this.form);
    }
  }
};
</script>

<style>
</style>
