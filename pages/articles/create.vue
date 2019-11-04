<template>
  <div class="p-6 container">
    <div class="text-center">
      <h1 class='text-gray-900 text-2xl tracking-wide font-bold'>Write Article</h1>
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
  name: 'create',

  middleware: 'auth',

  components: {
    ArticleInputField
  },

  data () {
    return {
      title : 'Blog | Write your Article',

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
        'title' : '',
        'description' : '',
      },

      errors: null
    }
  },

  head() {
    return {
      title: this.title,
      meta: [
        { hid: "Write article", name: "Write article", content: "Write an article in our blog" }
      ]
    }
  },

  methods : {
    updateFormValues: function(fieldName, value) {
      Object.defineProperty(this.form, fieldName, {
        value
      })
    },

    async submitForm() {
      try {
        const response = await this.$axios.post("/articles", this.form)

        this.$router.push(response.data.links.self)
      } catch (errors) {
        this.errors = errors.response.data.errors
      }
    }
  }
}
</script>
