<template>
  <div class="mt-8 px-10 p-6 container">
    <div class="sm:px-8 sm:py-2">
      <div class="mb-4">
        <label class="text-gray-700">Title </label>

        <p class="text-gray-900 font-semibold tracking-wide sm:text-xl">{{ article.title }}</p>
      </div>

      <div class="mb-4">
        <label class="text-gray-700">Description </label>

        <p class="text-gray-900 font-semibold tracking-wide sm:text-xl">{{ article.description }}</p>
      </div>

      <div class="mb-4">
        <label class="text-gray-700">Written on</label>

        <p class="text-gray-900 font-semibold tracking-wide sm:text-xl">{{ article.created_at }}</p>
      </div>

      <div class="mb-4">
        <label class="text-gray-700">Last updated</label>

        <p class="text-gray-900 font-semibold tracking-wide sm:text-xl">{{ article.last_updated_at }}</p>
      </div>

      <div class="flex border-t border-gray-400 py-4">
        <!-- Edit Pencil button -->
        <nuxt-link
          :to="'/articles/' + this.$route.params.id + '/edit'"
          class="relative mr-6 w-10 h-10 bg-blue-400 rounded-full hover:bg-blue-300 shadow"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg"
            class="absolute inset-0 m-2 w-6 h-6 text-gray-800 fill-current" 
            viewBox="0 0 20 20">
            <path d="M12.3 3.7l4 4L4 20H0v-4L12.3 3.7zm1.4-1.4L16 0l4 4-2.3 2.3-4-4z"/>
          </svg>
        </nuxt-link>

        <!-- Delete trash button -->
        <button
          @click="deleteArticle"
          class="relative bg-gray-500 text-gray-800 fill-current relative ml-2 pb-6 rounded-full w-10 h-10 flex justify-center hover:bg-gray-600 hover:text-white focus:outline-none active:bg-gray-600 shadow"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg"
            class="absolute w-6 h-6 fill-current"
            viewBox="0 0 20 20"
          >
            <path d="M6 2l2-2h4l2 2h4v2H2V2h4zM3 6h14l-1 14H4L3 6zm5 2v10h1V8H8zm3 0v10h1V8h-1z"/>
          </svg>
        </button>
      </div>
    
    </div>
  </div>
</template>

<script>
export default {
  middleware: 'auth',

  validate ({ params }) {
    // Must be a number
    return /^\d+$/.test(params.id)
  },

  head() {
    return {
      title: 'Blog | ' + this.article.title,
      meta: [
        { hid: "Article", name: "Article", content: "My Article" }
      ]
    }
  },

  data () {
    return {
      article : { title : ''}
    }
  },

  created () {
    this.fetchArticle()
  },

  methods : {
    async fetchArticle () {
      try {
        let response = await this.$axios.get("/articles/" + this.$route.params.id)

        this.article = response.data.data
      } catch (errors) {
        // redirect to articles index if there is no content or the response is 404
        this.$router.push("/articles");
      }
    },

    async deleteArticle () {
      try {
        let response = await this.$axios.delete("/articles/" + this.$route.params.id)

        this.$router.push("/articles");
      } catch (errors) {
        // redirect to articles index if there is no content or the response is 404
        this.$router.push("/articles");
      }
    },
  },
}
</script>
