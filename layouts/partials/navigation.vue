<template>
  <header class="bg-blue-800 shadow-xl">
    <div class="container py-2 px-2 mx-auto">
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
            class="py-2 px-3 text-gray-900 rounded-lg bg-blue-300 hover:bg-teal-200 focus:bg-teal-200"
          >
            Sign Up
          </nuxt-link>
        </div>

        <div
          v-else
          class="flex justify-between items-center"
        >
          <!-- Hidden in screens lower than 640x -->
          <div class="hidden sm:inline text-gray-200 font-semibold">
            <nuxt-link 
              to="/articles"
              class="mr-6 hover:text-teal-300 hover:text-gray-900"
            >
              My Articles
            </nuxt-link>

            <nuxt-link 
              to="/articles/create"
              class="mr-6 hover:text-teal-300 hover:text-gray-900"
            >
              Write an Article
            </nuxt-link>
          </div>

          <!-- Visible in screens lower than 640x -->
          <div class="flex sm:hidden items-center mr-3 text-teal-100 font-semibold">
            <nuxt-link 
              to="/articles"
              class="mr-3"
            >
              <svg
                class="fill-current h-6 w-6 mr-2" 
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                >
                <path d="M0 4c0-1.1.9-2 2-2h7l2 2h7a2 2 0 012 2v10a2 2 0 01-2 2H2a2 2 0 01-2-2V4z"/>
              </svg>
            </nuxt-link>

            <nuxt-link 
              to="/articles/create"
              class="mr-3"
            >
              <svg 
                class="fill-current h-6 w-6"
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 20 20"
              >
                <path d="M2 4v14h14v-6l2-2v10H0V2h10L8 4H2zm10.3-.3l4 4L8 16H4v-4l8.3-8.3zm1.4-1.4L16 0l4 4-2.3 2.3-4-4z"/>
              </svg>
            </nuxt-link>
          </div>

          <AccountNavDropdown />
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
import AccountNavDropdown from "~/components/AccountNavDropdown";

export default {
  components : {
    AccountNavDropdown
  },
}
</script>