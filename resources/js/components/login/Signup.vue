<template>
  <v-container>
    <v-form @submit.prevent="signUp">
      <v-container>
        <v-layout>
             <v-flex xs12 md4>
            <v-text-field v-model="form.name" label="Name" required></v-text-field>
            <span class="red--text" v-if="errors.name">{{errors.name[0]}}</span>
          </v-flex>
          <v-flex xs12 md4>
            <v-text-field v-model="form.email" label="E-mail" required></v-text-field>
               <span class="red--text" v-if="errors.email">{{errors.email[0]}}</span>
          </v-flex>
          <v-flex xs12 md4>
            <v-text-field v-model="form.password" label="Password" required></v-text-field>
               <span class="red--text" v-if="errors.password">{{errors.password[0]}}</span>
          </v-flex>
           <v-flex xs12 md4>
            <v-text-field v-model="form.password_confirmation" label="Confirm Password" required></v-text-field>
          </v-flex>
        </v-layout>
      </v-container>

      <v-btn color="green" type="submit">SignUp</v-btn>
       <router-link to="/login">
        <v-btn flat>Login</v-btn>
      </router-link>
    </v-form>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: null,
        email: null,
        password: null,
        password_confirmation: null
      },
      errors: {}
    };
  },
  created() {
    if (User.loggedIn()) {
      this.$router.push({ name: "forum" });
    }
  },
  methods: {
    signUp() {
      axios
        .post("/api/auth/signup", this.form)
        .then(res => {
          console.log(res.data);
          User.responseAfterLogin(res);
          this.$router.push({ name: "forum" });
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>

<style>
</style>
