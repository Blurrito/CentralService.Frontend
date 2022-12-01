<template>
  <div class="w-50 position-relative start-50 translate-middle-x border rounded" style="overflow: hidden">
    <div v-if="devices.length > 0">
    <div data-cy="list-servers" v-for="(item, index) in devices" :key="index" :class="{ 'border-bottom': (index + 1) != devices.length  }" style="overflow: hidden">
      <div class="h-100" style="width: 43px; margin-left: -1px">
        <button class="btn btn-primary" style="border-radius: 0px; height: 50px;" type="button" data-bs-toggle="collapse" :data-bs-target="'#collapseExample'+index" aria-expanded="false" :aria-controls="'collapseExample'+index">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
          </svg>
        </button>
      </div>
      <div class="position-absolute p-2" style="margin: -50px 43px 0px 43px; height: 50px; width: calc(100% - 86px);">
        <div class="rounded-circle" :class="{ 'bg-success': item.isOnline, 'bg-secondary': !item.isOnline }" style="height: 10px; width: 10px; margin-top: 3px"></div>
        <h6 style="width: fit-content; font-family: var(--bs-font-sans-serif); margin: -16px 0px 0px 13px">{{ item.deviceName }}</h6>
        <p style="width: fit-content; font-family: var(--bs-font-sans-serif); color: grey; font-size: 11px; margin-top: 3px">Registered at: {{ item.registeredDate }}</p>
        <div class="border-start" style="width: 50%; height: 40px; margin-top: -55px; margin-left: 50%">
          <p style="width: fit-content; font-weight: 500; font-size: 11px; margin-top: 4px; margin-left: 5px;">Device ID: {{ item.deviceId }}</p>
          <p style="width: fit-content; font-weight: 500; font-size: 11px; margin-top: -12px; margin-left: 5px">MAC address: {{ item.macAddress }}</p>
        </div>
      </div>
      <div class="position-absolute end-0" style="width: 43px; margin-top: -50px; margin-right: -1px;">
        <button class="btn btn-danger" style="border-radius: 0px; height: 50px" type="button" @click="removeDeviceInformation(index)">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
          </svg>
        </button>
      </div>
      <GameProfileList :games="item.gameProfiles" :index="index" />
    </div>
    </div>
    <div data-cy="list-noservers" v-else>
      <p class="mt-3" style="font-family: var(--bs-font-sans-serif);">No devices are linked to this account! Got a device set up? Link them to your account <router-link class="link" to="registerdevice">here</router-link>!</p>
    </div>
  </div>
</template>

<script>
import router from '@/router';
import { serverUrl } from '../../auth-config.json'
import GameProfileList from '@/components/GameProfileList.vue'

export default {
    name: "DeviceList",
    components: {
        GameProfileList
    },
    props: {
      'devices': Array
    },
    data() {
        return { }
    },
    methods: {
        async removeDeviceInformation(index) {
            const authToken = await this.$auth.getTokenSilently();

            try {
                const response = await fetch(
                    `${serverUrl}/user/unlink?Email=${this.$auth.user.email}&DeviceId=${this.devices[index].deviceId}&MacAddress=${this.devices[index].macAddress}`,
                    {
                        method: "DELETE",
                        headers: {
                            Authorization: `Bearer ${authToken}`
                        }
                    })
                if (response.ok) {
                    router.go();
                }
            } catch(e) {
                //console.log(e);
            }
        }
    }
}
</script>
