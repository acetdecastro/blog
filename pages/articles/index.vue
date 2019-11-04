<template>
  <div class="p-6 container">
    <main>
      <h1 class='text-center text-gray-900 text-2xl tracking-wide font-bold'>My Articles</h1>

      <section>
        <nuxt-link 
          v-for="article in articles"
          :key="article.data.id"
          :to="article.links.self"
          class="mx-auto my-4 w-68 sm:w-144 flex flex-col justify-center"
        >
          <article>
            <div class="p-4 h-32 w-auto bg-white rounded-lg shadow-lg hover:bg-teal-100">
              <h2 
                v-text="article.data.title"
                class="mb-2 text-base sm:text-xl font-semibold tracking-wider truncate"
              >
              </h2>

              <p
                v-text="article.data.description"
                class="mb-2 text-sm sm:text-base font-semibold text-gray-700 tracking-wide leading-relaxed break-normal truncate"
              >
              </p>

              <span
                class="text-xs sm:text-sm font-semibold text-gray-600 tracking-wide leading-relaxed break-normal"
              >
                {{ article.data.created_at }}
              </span>
              
            </div>
          </article>
        </nuxt-link>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  middleware: 'auth',

  data () {
    return {
      title: "Blog | My Articles",

      errors : null,

      articles : ''
    }
  },

  head() {
    return {
      title: this.title,
      meta: [
        { hid: "Articles", name: "Articles", content: "Articles in our blog" }
      ]
    };
  },

  created () {
    this.fetchArticles()
  },

  methods : {
    async fetchArticles () {
      try {
        let response = await this.$axios.get("/articles")

        this.articles = response.data.data
      } catch (errors) {
        this.errors = errors.response.data.errors;
      }
    },
  },
}
</script>