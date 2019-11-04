<template>
  <div class="mb-6">
    <label
      :for="fieldName"
      class="pt-2 uppercase text-sm font-bold text-gray-600 tracking-wider"
    >{{ label }}</label>

    <input
      type="text"
      class="pt-4 pb-1 w-full border-b-2 border-gray-500 bg-gray-200 focus:outline-none focus:border-blue-400 text-gray-800 text-sm sm:text-xl"
      :class="errorClassObject()"
      :id="fieldName"
      v-model="value"
      autocomplete="off"
      autofocus
      @input="updateField"
    />

    <p class="form-field-text-validation-error" v-text="showErrorMsg()"></p>
  </div>
</template>

<script>
export default {
  props: ["fieldName", "label", "errors", "articleData"],

  data: function() {
    return {
      value: ""
    };
  },

  computed: {
    hasError: function() {
      return (
        this.errors &&
        this.errors[this.fieldName] &&
        this.errors[this.fieldName].length
      )
    }
  },

  methods: {
    updateField () {
      this.clearErrorMsg(this.fieldName);

      this.$emit("update:field", this.value);
    },

    showErrorMsg () {
      if (this.hasError) {
        return this.errors[this.fieldName][0];
      }
    },

    clearErrorMsg () {
      if (this.hasError) {
        this.errors[this.fieldName] = null;
      }
    },

    errorClassObject () {
      return {
        "form-field-line-error": this.hasError
      }
    }
  },

  watch: {
    articleData: function(val) {
      this.value = val;
    }
  }
};
</script>