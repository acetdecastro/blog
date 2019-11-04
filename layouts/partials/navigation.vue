<template>
  <header class="bg-blue-900 shadow-xl">
    <div class="container py-2 px-6 mx-auto">
      <nav class="flex justify-between items-center">
        <nuxt-link to="/" class="text-3xl text-gray-200 font-bold tracking-wide">Blog</nuxt-link>

        <div
          v-if="! authenticated"
          class="text-gray-200 font-semibold"
        >
          <nuxt-link 
            to="/login"
            class="mr-3 hover:text-teal-300 hover:text-gray-900"
          >
            Log In
          </nuxt-link>
          <nuxt-link
            to="/register"
            class="py-2 px-3 text-gray-900 rounded-lg bg-teal-300 hover:bg-teal-200 focus:bg-teal-200"
          >
            Sign Up
          </nuxt-link>
        </div>

        <div
          v-else
        >
          <button
            @click="logout"
            class="text-gray-900 hover:text-gray-800 hover:text-gray-900 focus:outline-none"
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