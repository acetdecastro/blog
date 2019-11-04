<template>
  <div class="relative inline">
    <button 
      @click="isOpen = ! isOpen" 
      :class="isOpen ? 'bg-blue-700' : 'bg-blue-600'"
      class="inline-flex items-center pl-4 pr-2 py-2 font-semibold text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:shadow-outline active:bg-gray-900 tracking-wide"
    >
      Account
      <svg class="ml-2 h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z"/>
      </svg>
    </button>

    <div 
      v-if="isOpen" 
      @click="isOpen = false" 
      class="fixed inset-0" 
      tabindex="-1">
    </div>

    <transition
      enter-class="opacity-0 scale-90"
      enter-active-class="ease-out transition-fast"
      enter-to-class="opacity-100 scale-100"
      leave-class="opacity-100 scale-100"
      leave-active-class="ease-in transition-fast"
      leave-to-class="opacity-0 scale-90"
    >
      <div 
        v-if="isOpen" 
        class="mt-3 absolute right-0 origin-top-right">
        <div class="w-64 text-left bg-white rounded-lg shadow-xl">
          <div class="flex items-center px-6 py-4">
            <UserCircle />

            <!-- <img class="h-10 w-10 rounded-full flex-no-shrink" src="https://images.unsplash.com/photo-1541271696563-3be2f555fc4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=1.75&w=200&h=200&q=80" alt=""> -->


            <div class="ml-4">
              <p class="font-semibold text-gray-900 leading-none">{{ user.name }}</p>
              <p @click="isOpen = false">
                <nuxt-link 
                  to="/account/profile"
                  class="text-sm text-gray-600 leading-none hover:text-blue-600"
                >
                  View Profile
                </nuxt-link>
              </p>
            </div>
          </div>

          <div class="border-t-2 border-gray-200 py-1 hover:bg-teal-200 hover:overflow-hidden rounded-b-lg">
            <button 
              @click="logout" 
              class="block w-full px-6 py-3 font-semibold text-left leading-tight focus:outline-none"
            >
              Sign out
            </button>
          </div>
          
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import UserCircle from "./UserCircle";

export default {
  components : {
    UserCircle
  },

  data () {
    return {
      isOpen: false,
    }
  },

  methods : {
    logout () {
      this.$auth.logout()
    }
  }
}
</script>