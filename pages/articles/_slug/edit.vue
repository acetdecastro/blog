<template>
  <div class="p-6 container">
    <div class="text-center">
      <h1 class='text-gray-900 text-2xl tracking-wide font-bold'>Edit Article</h1>
    </div>

    <div class="py-6">
      <form @submit.prevent='submitForm'>
        <ArticleInputField
          v-for="inputField in inputFields"
          :key="inputField.name"
          :fieldName="inputField.name"
          :label="inputField.label"
					:type="inputField.type"
					:errors="errors"
          :articleData="form[inputField.name]"
          @update:field="updateFormValues(inputField.name, $event)"
        />

        <div class="pt-4">
          <button class="btn btn-primary">
            Submit
          </button>
        </div>

      </form>
    </div>
  </div>
</template>

<script>
import ArticleInputField from "~/components/ArticleInputField"

export default {
  name: 'edit',

  middleware: 'auth',

  validate ({ params }) {
    // Must be a number
    return /^\d+$/.test(params.slug)
  },

  components: {
    ArticleInputField
  },

  data () {
    return {
      title : 'Blog | Edit Article',

      inputFields: [
				{
					'name': 'title',
					'label': 'Title',
					'type': 'text',
				},
				{
					'name': 'description',
					'label': 'Description',
					'type': 'text',
				},
			],

      form: {
        title : '',
        description : '',
      },

      errors: null
    }
  },

  head() {
    return {
      title: this.title,
      meta: [
        { hid: "Edit article", name: "Edit article", content: "Edit an article in our blog" }
      ]
    }
  },

  created () {
    this.fetchArticle()
  },

  methods : {
    async fetchArticle () {
      try {
        let response = await this.$axios.get("/articles/" + this.$route.params.slug)

        this.form = response.data.data
      } catch (errors) {
        // redirect to articles index if there is no content or the response is 404
        this.$router.push("/articles");
      }
    },

    updateFormValues: function(fieldName, value) {
      Object.defineProperty(this.form, fieldName, {
        value
      })
    },

    async submitForm() {
      try {
        const response = await this.$axios.patch("/articles/" + this.$route.params.slug, this.form)

        this.$router.push(response.data.links.self)
      } catch (errors) {
        this.errors = errors.response.data.errors
      }
    }
  }
}
</script>
