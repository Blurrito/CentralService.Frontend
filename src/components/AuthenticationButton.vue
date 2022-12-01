<template>
  <div>
    <LogoutButton v-if="$auth.isAuthenticated" />
    <div style="color: white" v-else>
        <LoginButton />
        or
        <SignupButton />
    </div>
  </div>
</template>

<script>
  import LoginButton from '@/components/LoginButton';
  import LogoutButton from '@/components/LogoutButton';
  import SignupButton from '@/components/SignupButton';

  export default {
    name: 'AuthenticationButton',
    components: { LogoutButton, LoginButton, SignupButton },
  };
</script>