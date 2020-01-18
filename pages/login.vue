<template>
  <div>
    <h1>Login</h1>
    <UserAuthForm :submit-form="loginUser" button-text="Login" />
  </div>
</template>
<script>
  import UserAuthForm from '@/components/UserAuthForm'

  export default {
    components: {
      UserAuthForm
    },
    methods: {
      loginUser(loggininfo){
        this.$auth.loginWith('local', {
          data: loggininfo
        })
        //alert('You pressed a button')
      }
    }
  }
</script>
