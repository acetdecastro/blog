<template>
  <div class="mx-auto py-32 flex justify-center items-center">
    <div class="w-96 p-6 bg-white h-auto shadow-xl rounded">
      <div class="text-center mb-6">
        <h1 class="text-4xl font-bold">Log In</h1>
        <h2 class="text-gray-600 mt-1">Enter your information below</h2>
      </div>

      <form @submit.prevent="submitForm">
        <AuthInputField
          v-for="(inputField, index) in inputFields"
          :key="index"
          :fieldName="inputField.name"
          :label="inputField.label"
          :placeholder="inputField.placeholder"
					:type="inputField.type"
					:errors="errors"
          @update:field="updateFormValues(inputField.name, $event)"
        />

        <div class="mt-6 px-4 flex justify-between items-center">
          <button
            type="submit"
            class="py-2 px-3 bg-green-300 rounded-lg shadow-md font-bold tracking-wide hover:bg-green-200 focus:bg-green-200 focus:outline-none focus:shadow-outline"
          >
						Log In
					</button>

					<nuxt-link
						to="/register"
						class="font-semibold text-gray-600 hover:text-gray-700 focus:text-gray-700 outline-none"
					>
						Create an account?
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
			title: "Blog | Log In",
			
			inputFields: [
				{
					'name': 'email',
					'label': 'E-mail',
					'placeholder': '',
					'type': 'email',
				},
				{
					'name': 'password',
					'label': 'Password',
					'placeholder': '',
					'type': 'password',
				},
			],

      form: {
        email: "",
        password: "",
      },

      errors: null
    };
  },

  head() {
    return {
      title: this.title,
      meta: [
        { hid: "Log In", name: "Log In", content: "Log In in our blog" }
      ]
    };
  },

  methods: {
		/*
		* Takes the fieldName as well as the value typed on the input field
		* Updates by redifining the property as well as its value
		* ex: 'name' : <value>
		*/
    updateFormValues (fieldName, value) {
      Object.defineProperty(this.form, fieldName, {
        value
      });
    },

    submitForm() {
      this.$axios
        .post("/auth/login", this.form)
        .then(response => {
          this.$auth.login({
            data: this.form
          });

          this.$router.push({name: "index"});
        })
        .catch(errors => {
          this.errors = errors.response.data.errors;
        });
    }
  }
};
</script>