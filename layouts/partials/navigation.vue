<template>
  <header class="bg-gray-100 shadow-lg">
    <div class="container py-2 px-6 mx-auto">
      <nav class="flex justify-between items-center">
        <nuxt-link to="/" class="text-3xl font-bold tracking-wide">Blog</nuxt-link>

        <div
          v-if="! authenticated"
          class="text-gray-700 font-semibold"
        >
          <nuxt-link 
            to="/login"
            class="mr-3 hover:text-gray-800 hover:text-gray-900"
          >
            Log In
          </nuxt-link>
          <nuxt-link
            to="/register"
            class="py-2 px-3 text-gray-800 rounded-lg bg-teal-300 hover:bg-teal-200 focus:bg-teal-200"
          >
            Sign Up
          </nuxt-link>
        </div>

        <div
          v-else
        >
          <button
            @click="logout"
            class="text-gray-700 hover:text-gray-800 hover:text-gray-900 focus:outline-none"
          >
            Log Out
          </button>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  methods : {
    logout () {
      this.$auth.logout()
    }
  }
}
</script>