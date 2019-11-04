<template>
  <div>

  </div>
</template>

<script>
export default {
  middleware : 'auth',

  created () {
    this.$router.push("articles")
  }
}
</script>