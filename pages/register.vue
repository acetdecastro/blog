<template>
  <div class="mx-auto py-16 flex justify-center items-center">
    <div class="w-96 p-6 bg-white h-auto shadow-xl rounded">
      <div class="text-center mb-6">
        <h1 class="text-4xl font-bold">Sign Up</h1>
        <h2 class="text-gray-600 mt-1">It's quick and easy</h2>
      </div>

      <form @submit.prevent="submitForm">
        <AuthInputField
          v-for="inputField in inputFields"
          :key="inputField.name"
          :fieldName="inputField.name"
          :label="inputField.label"
          :placeholder="inputField.placeholder"
					:type="inputField.type"
					:errors="errors"
          @update:field="updateFormValues(inputField.name, $event)"
        />

        <div class="mt-6 flex justify-between items-center">
          <button
            type="submit"
            class="py-2 px-3 bg-green-300 rounded-lg shadow-md font-bold tracking-wide hover:bg-green-200 focus:bg-green-200 focus:outline-none focus:shadow-outline"
          >
						Submit
					</button>

					<nuxt-link
						to="/login"
						class="font-semibold text-gray-600 hover:text-gray-700 focus:text-gray-700 outline-none"
					>
						Already have an account?
					</nuxt-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import AuthInputField from "~/components/AuthInputField";

export default {
  middleware: 'guest',

  components: {
    AuthInputField
  },

  data() {
    return {
			title: "Blog | Sign Up",
			
			inputFields: [
				{
					'name': 'name',
					'label': 'Full Name',
					'placeholder': 'Juan Dela Cruz',
					'type': 'text',
				},
				{
					'name': 'email',
					'label': 'E-mail',
					'placeholder': 'juandelacruz@gmail.com',
					'type': 'email',
				},
				{
					'name': 'password',
					'label': 'Password',
					'placeholder': 'minimum of 8 characters',
					'type': 'password',
				},
				{
					'name': 'password_confirmation',
					'label': 'Confirm Password',
					'placeholder': 're-type your password',
					'type': 'password',
				},
			],

      form: {
        name: "",
        email: "",
        password: "",
        password_confirmation: ""
      },

      errors: null
    };
  },

  head() {
    return {
      title: this.title,
      meta: [
        { hid: "Sign Up", name: "Sign Up", content: "Sign Up in our blog" }
      ]
    };
  },

  methods: {
		/*
		* Takes the fieldName as well as the value typed on the input field
		* Updates by redifining the property as well as its value
		* ex: 'name' : <value>
		*/
    updateFormValues: function(fieldName, value) {
      Object.defineProperty(this.form, fieldName, {
        value
      });
    },

   async submitForm() {
      try {
        await this.$axios.post("/auth/register", this.form)

        await this.$auth.loginWith('local', {data: this.form});

        this.$router.push("articles");
      } catch (errors) {
        this.errors = errors.response.data.errors;
      }
    }
  }
};
</script>