<template>
  <div>
    <h1>Register</h1>
    <UserAuthForm :submit-form="registerUser" button-text="Register" has-name="true" />
  </div>
</template>
<script>
  import UserAuthForm from '@/components/UserAuthForm'

  export default {
    components: {
      UserAuthForm
    },
    methods: {
      registerUser(registerinfo){
        alert('You pressed a button')
      }
    }
  }
</script>
