<template>
  <div class="rounded-full p-4 text-gray-100 bg-gray-600 shadow-md w-12 h-12 flex justify-center items-center border-1 border-gray-400 font-bold">
    <span class="tracking-wide">{{ userCircleName }}</span>
  </div>
</template>

<script>
export default {
  name: "UserCircle",

  computed: {
      userCircleName: function() {
        return this.user.name
          .match(/[A-Z]/g)
          .slice(0, 2)
          .join("")
      },
    }
}
</script>