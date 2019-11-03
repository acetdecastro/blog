<template>
  <div class="relative mb-3">
    <label 
      :for="fieldName"
      class="auth-label"
    >
      {{ label }}
    </label>

    <input
      v-model="value"
      @input="updateField"
      :id="fieldName"
      :name="fieldName"
      :type="type"
      :class="[ inputClassObject ]"
      :placeholder="placeholder"
    />

    <p 
      class="form-field-text-validation-error"
      v-text="showErrorMsg()"
    >
    </p>
  </div>
</template>

<script>
export default {
  name: "AuthInputField",

  props: [
    "fieldName",
    "label", 
    "placeholder", 
    "type",
    "errors",
  ],

  data () {
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
    },

    inputClassObject () {
      return {
        "auth-input": ! this.hasError,
        "auth-input-is-invalid": this.hasError
      }
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
  },
};
</script>