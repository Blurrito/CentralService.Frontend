<template>
  <div class="position-relative">
    <div class="w-50 position-absolute start-50 translate-middle-x">
    <h1 class="mt-3" style="font-family: var(--bs-font-sans-serif);">Welcome to Niredo!</h1>
    <div class="border p-2 mt-3 rounded-top w-100">
      <p style="font-family: var(--bs-font-sans-serif);">Niredo (Nitro Redone Online) is a recreated version of the Nintendo Wi-Fi Connection service that various Nintendo DS games used to communicate over the internet. Simply connect your Nintendo DS with a game of your choice to the server and start playing!</p>
    </div>
    <div class="border border-top-0 p-2 rounded-bottom w-100">
      <p style="font-family: var(--bs-font-sans-serif);">Looking for someone to play with? Here's a list of currently live lobbies:</p>
      <ServerList/>
    </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ServerList from '@/components/ServerList.vue'

export default {
  name: 'HomeView',
  components: {
    ServerList
  }
}
</script>
