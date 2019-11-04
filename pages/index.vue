<template>
  <div>
    <login />
  </div>
</template>

<script>
import login from "./login";

export default {
  components : {
    login
  },

  // data () {
  //   return {
  //     form : {
  //       title : 'Title Sample',
  //       description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo magni itaque enim reiciendis labore vero sint dolor, ut quis at quo. Ipsum dolorum labore nulla tempora fuga placeat, optio suscipit.'
  //     }
  //   }
  // },

  // created () {
  //   this.$axios
  //       .post("/articles", this.form)
  //       .then(response => {
  //         console.log(response.data)
  //       })
  //       .catch(errors => {
  //         console.log(errors.response.data.errors);
  //       });

  // }
}
</script>

<style>

</style>
