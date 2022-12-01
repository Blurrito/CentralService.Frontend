<template>
  <button
    class="btn btn-secondary btn-block"
    v-if="!$auth.isAuthenticated"
    @click="login"
  >
    Log In
  </button>
</template>

<script>
  export default {
    name: 'LoginButton',
    methods: {
      login() {
        this.$auth.loginWithRedirect( {
            screen_hint: "signup",
        });
      },
    },
  };
</script>