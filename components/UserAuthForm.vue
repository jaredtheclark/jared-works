<template>
  <form v-bind="valid" lazy>
    <input v-if="hasName"
                  v-model="userInfo.name"
                  :rules="[required('name')]"
                  label="Name"/>

    <input v-model="userInfo.email"
                  :rules="[required('email'), emailFormat()]"
                  label="Email"/>

    <input v-model="userInfo.password"
                  :type="showPassword ? 'text' : 'password'"
                  :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                  :rules="[required('password'), minLength('password', 8)]"
                  counter
                  label="Password"
                  @click:append="showPassword = !showPassword"
                  />

    <div :disabled="!valid" @click="submitForm(userInfo)">{{ buttonText }}</div>
  </form>
</template>

<script>
  import validations from "@/utils/validations";

  export default {

    props: {
      submitForm: {
        type: Function,
        default(){return () => true}
      },
      buttonText: {
        type:String,
        default: ''
      },
      hasName: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        valid: false,
        showPassword: false,
        userInfo: {
          email: '',
          password: ''
        },
        ...validations
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
