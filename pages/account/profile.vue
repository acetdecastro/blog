<template>
  <div class="p-6 container">
    <h1 class='text-gray-900 text-2xl tracking-wide font-bold'>My Profile</h1>

    <div class="py-6">
      <div class="mb-4">
        <label class="text-gray-700">Name </label>

        <p class="text-gray-900 font-semibold tracking-wide text-xl">{{ user.name }}</p>
      </div>

      <div class="mb-4">
        <label class="text-gray-700">E-mail </label>

        <p class="text-gray-900 font-semibold tracking-wide text-xl">{{ user.email }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  middleware: 'auth',

  head() {
    return {
      title: 'Blog | My Profile',
      meta: [
        { hid: "Profile", name: "Profile", content: "My Profile" }
      ]
    }
  },
}
</script>
