<template>
  <div>
    <div class="w-50 p-2 mt-5 border rounded-top position-relative start-50 translate-middle-x">
      <h1 style="font-family: var(--bs-font-sans-serif);">Linking a device</h1>
      <p style="font-family: var(--bs-font-sans-serif);">Linking a device to your account allows you to see a summary of all games linked to that device, as well as the online status and friend code for each game for quick sharing!</p>
      <p style="font-family: var(--bs-font-sans-serif);">In order to link a device, you need to open up the Nintendo WFC settings in a game of choice (or the system settings on DSi) and navigate to Options -> System Info. Make sure your device has been registered on the Niredo server before attempting to link your device! A guide on how to register your device on the Niredo server can be found <router-link class="link" to="start">here</router-link>!</p>
    </div>
    <LinkDeviceForm />
  </div>
</template>

<script>
import LinkDeviceForm from '@/components/LinkDeviceForm.vue'

export default {
    name: "RegisterDeviceView",
    components: {
        LinkDeviceForm
    },
    data() {
        return { }
    }
}
</script>
