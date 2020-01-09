<template>
  <div>
    <h3>Users</h3>
    <ul>
      <li v-for="user in users" :key="user.id">
        {{ user.username }}
      </li>
    </ul>
  </div>
</template>

<script>


import get_users from '~/apollo/queries/getUsers'

export default {
  apollo: {
      users: {
        prefetch: true,
        query: get_users
      }
  },
  head: {
    title: 'Users'
  }
}

</script>

<style></style>
